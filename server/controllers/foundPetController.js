const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const foundPetController = (FoundPet) => {
  //GET
  const getFoundPets = async (req, res) => {
    const { query } = req;
    const response = await FoundPet.find(query);
    res.json(response);
  };

  const getFoundPetById = async (req, res) => {
    try {
      const { params } = req;
      const response = await FoundPet.findById(params.foundPetId);
      res.json(response);
    } catch (err) {
      res.status(500).json('Error');
    }
  };

  //POST
  const postFoundPet = async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    try {
      const {
        username,
        description,
        phone,
        addressNumber,
        addressRoad,
        latLng,
        date,
        filter,
      } = req.body;

      const foundPet = FoundPet({
        username,
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
      await foundPet.save();
      res.json('Updated successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  //PUT
  const putFoundPetById = async (req, res) => {
    try {
      const { body } = req;
      if(req.file){
        const result = await cloudinary.v2.uploader.upload(req.file.path);

        const response = await FoundPet.findByIdAndUpdate(req.params.foundPetId, {
          username: body.username,
          description: body.description,
          phone: body.phone,
          addressNumber: body.addressNumber,
          addressRoad: body.addressRoad,
          latLng: body.latLng,
          date: body.date,
          filter: body.filter,
          imageURL: result.url,
          cloudinary: result.public_id,
        });
        cloudinary.v2.uploader.destroy(response.public_id);
      }else{
        const aux = await FoundPet.findById(req.params.foundPetId);
        await FoundPet.updateOne({
            _id: req.params.foundPetId
        },
        {
          $set:{
            username: body.username,
            description: body.description,
            phone: body.phone,
            addressNumber: body.addressNumber,
            addressRoad: body.addressRoad,
            latLng: body.latLng,
            date: body.date,
            filter: body.filter,
            imageURL: aux.imageURL,
            cloudinary: aux.cloudinary,
          }
        })
      }

      res.json('Updated successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  //DELETE
  const deleteFoundPetById = async (req, res) => {
    try {
      const id = req.params.foundPetId;
      await FoundPet.findByIdAndDelete(id);
      cloudinary.v2.uploader.destroy(adoptionPet.cloudinary);

      res.json('Deleted successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  return {
    getFoundPets,
    getFoundPetById,
    postFoundPet,
    putFoundPetById,
    deleteFoundPetById,
  };
};

module.exports = foundPetController;
