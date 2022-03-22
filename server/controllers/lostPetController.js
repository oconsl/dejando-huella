const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const lostPetController = (LostPet) => {
  //GET
  const getLostPet = async (req, res) => {
    const { query } = req;
    const response = await LostPet.find(query);
    res.json(response);
  };

  //POST
  const postLostPet = async (req, res) => {
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path);

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

      const lostPet = LostPet({
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

      await lostPet.save();
      res.json('Uploaded successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  //PUT
  const putLostPetById = async (req, res) => {
    try {
      const { body } = req;

      const result = await cloudinary.v2.uploader.upload(req.file.path);

      const response = await LostPet.findByIdAndUpdate(req.params.lostPetId, {
        username: body.username,
        petName: body.petName,
        description: body.description,
        phone: body.phone,
        addressNumber: body.addressNumber,
        addressRoad: body.addressRoad,
        latLng: body.latLng,
        date: body.date,
        filter: body.filter,
        imgURL: result.url,
        cloudinary: result.public_id,
      });
      cloudinary.v2.uploader.destroy(response.cloudinary);

      res.json('Updated successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  //DELETE
  const deleteLostPetById = async (req, res) => {
    try {
      const id = req.params.lostPetId;
      const lostPet = await LostPet.findByIdAndDelete(id);

      cloudinary.v2.uploader.destroy(lostPet.cloudinary);

      res.json('Deleted successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  return { getLostPet, postLostPet, putLostPetById, deleteLostPetById };
};

module.exports = lostPetController;
