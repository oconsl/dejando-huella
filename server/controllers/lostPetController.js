const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const lostPetController = (LostPet) => {
  const getLostPet = async (req, res) => {
    const { query } = req;
    const response = await LostPet.find(query);
    res.json(response);
  };

  const postLostPet = async (req, res) => {
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
      res.json('Successful');
    } catch (err) {
      res.json('Error');
    }
  };

  const putLostPetById = async (req, res) => {
    try {
      const { body } = req;
      const response = await LostPet.findByIdAndUpdate(req.params.lostPetId, {
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
      });
      res.json(response);
    } catch (err) {
      if (err.name === 'ValidationError') {
        let errors = {};
        Object.keys(err.errors).forEach((key) => {
          errors[key] = err.errors[key].message;
        });
        return res.json(errors);
      }
      res.json('Error');
    }
  };

  const deleteLostPetById = async (req, res) => {
    try {
      const id = req.params.lostPetId;
      await LostPet.findByIdAndDelete(id);
      res.json('Pet has been deleted.');
    } catch (err) {
      res.json('Error');
    }
  };

  return { getLostPet, postLostPet, putLostPetById, deleteLostPetById };
};

module.exports = lostPetController;
