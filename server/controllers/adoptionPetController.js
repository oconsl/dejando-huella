const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const adoptionPetController = (AdoptionPet) => {
  //GET
  const getAdoptionPets = async (req, res) => {
    const { query } = req;
    const response = await AdoptionPet.find(query);
    res.json(response);
  };

  const getAdoptionPetById = async (req, res) => {
    try {
      const { params } = req;
      const response = await AdoptionPet.findById(params.adoptionPetId);
      res.json(response);
    } catch (err) {
      res.status(500).json('Error');
    }
  };

  //POST
  const postAdoptionPet = async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    try {
      const {
        username,
        petName,
        description,
        phone,
        addressNumber,
        addressRoad,
        latLng,
        date,
        filter,
      } = req.body;
      const adoptionPet = AdoptionPet({
        username,
        petName,
        description,
        phone,
        addressNumber,
        addressRoad,
        latLng,
        date,
        filter,
        imageURL: result.url,
        cloudinary: result.public_id,
      });
      await adoptionPet.save();
      res.json('Updated successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  //PUT
  const putAdoptionPetById = async (req, res) => {
    try {
      const { body } = req;
      const result = await cloudinary.v2.uploader.upload(req.file.path);

      const response = await AdoptionPet.findByIdAndUpdate(
        req.params.adoptionPetId,
        {
          username: body.username,
          petName: body.petName,
          description: body.description,
          phone: body.phone,
          addressNumber: body.addressNumber,
          addressRoad: body.addressRoad,
          latLng: body.latLng,
          image: body.image,
          date: body.date,
          filter: body.filter,
          imgURL: result.url,
          cloudinary: result.public_id,
        }
      );
      cloudinary.v2.uploader.destroy(response.public_id);

      res.json('Updated successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  //DELETE
  const deleteAdoptionPetById = async (req, res) => {
    try {
      const id = req.params.adoptionPetId;
      const adoptionPet = await AdoptionPet.findByIdAndDelete(id);
      cloudinary.v2.uploader.destroy(adoptionPet.cloudinary);
      res.json('Deleted successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  return {
    getAdoptionPets,
    getAdoptionPetById,
    postAdoptionPet,
    putAdoptionPetById,
    deleteAdoptionPetById,
  };
};

module.exports = adoptionPetController;
