const adoptedPetController = (AdoptedPet) => {
  const getAdoptedPets = async (req, res) => {
    const { query } = req;
    const response = await AdoptedPet.find(query);
    res.json(response);
  };

  const postAdoptedPet = async (req, res) => {
    try {
      const adoptedPet = new AdoptedPet(req.body);
      await adoptedPet.save();
      res.json(adoptedPet);
    } catch (err) {
      res.json(err);
    }
  };

  const putAdoptedPetById = async (req, res) => {
    try {
      const { body } = req;
      const response = await AdoptedPet.findByIdAndUpdate(
        req.params.adoptedPetsId,
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

  const deleteAdoptedPetById = async (req, res) => {
    try {
      const id = req.params.adoptedPetsId;
      await AdoptedPet.findByIdAndDelete(id);
      res.json('Pet has been deleted.');
    } catch (err) {
      res.json('Error');
    }
  };

  return {
    getAdoptedPets,
    postAdoptedPet,
    putAdoptedPetById,
    deleteAdoptedPetById,
  };
};

module.exports = adoptedPetController;
