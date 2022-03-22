const foundPetController = (FoundPet) => {
  //GET
  const getFoundPets = async (req, res) => {
    const { query } = req;
    const response = await FoundPet.find(query);
    res.json(response);
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
        imgURL: result.url,
        cloudinary: result.public_id,
      });
      cloudinary.v2.uploader.destroy(response.public_id);

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

  return { getFoundPets, postFoundPet, putFoundPetById, deleteFoundPetById };
};

module.exports = foundPetController;
