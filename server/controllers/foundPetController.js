const foundPetController = (FoundPet) => {
  const getFoundPets = async (req, res) => {
    const { query } = req;
    const response = await FoundPet.find(query);
    res.json(response);
  };

  const postFoundPet = async (req, res) => {
    try {
      const foundPet = new FoundPet(req.body);
      await foundPet.save();
      res.json(foundPet);
    } catch (err) {
      res.json('Error');
    }
  };

  const putFoundPetById = async (req, res) => {
    try {
      const { body } = req;
      const response = await FoundPet.findByIdAndUpdate(
        req.params.foundPetsId,
        {
          username: body.userName,
          description: body.description,
          phone: body.phone,
          addressNumber: body.addressNumber,
          addressRoad: body.addressRoad,
          latLng: body.latLng,
          image: body.image,
          date: body.date,
          filter: body.filter,
        }
      );
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

  const deleteFoundPetById = async (req, res) => {
    try {
      const id = req.params.foundPetsId;
      await FoundPet.findByIdAndDelete(id);
      res.json('Pet has been deleted.');
    } catch (err) {
      res.json('Error');
    }
  };

  return { getFoundPets, postFoundPet, putFoundPetById, deleteFoundPetById };
};

module.exports = foundPetController;
