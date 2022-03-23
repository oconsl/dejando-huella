const lostPetController = (LostPet) => {
  const getLostPet = async (req, res) => {
    const { query } = req;
    const response = await LostPet.find(query);
    res.json(response);
  };

  const getLostPetById = async (req, res) => {
    try {
      const { params } = req;
      const response = await LostPet.findById(params.lostPetId);
      res.json(response);
    } catch (err) {
      res.status(500).json('Error');
    }
  };

  const postLostPet = async (req, res) => {
    try {
      const lostPet = new LostPet(req.body);
      await lostPet.save();
      res.json(lostPet);
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

  return {
    getLostPet,
    getLostPetById,
    postLostPet,
    putLostPetById,
    deleteLostPetById,
  };
};

module.exports = lostPetController;
