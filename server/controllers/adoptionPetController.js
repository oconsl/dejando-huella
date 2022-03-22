const adoptionPetController = (AdoptionPet) => {
  const getAdoptionPet = async (req, res) => {
    const { query } = req;
    const response = await AdoptionPet.find(query);
    res.json(response);
  };

  const postAdoptionPet = async (req, res) => {
    try {
      const adoptionPet = new AdoptionPet(req.body);
      await adoptionPet.save();
      res.json(adoptionPet);
    } catch (err) {
      res.json('error');
    }
  };

  const putAdoptionPetById = async (req, res) => {
    try {
      const { body } = req;
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

  const deleteAdoptionPetById = async (req, res) => {
    try {
      const id = req.params.adoptionPetId;
      await AdoptionPet.findByIdAndDelete(id);
      res.json('Pet has been deleted.');
    } catch (err) {
      res.json('Error');
    }
  };

  return {
    getAdoptionPet,
    postAdoptionPet,
    putAdoptionPetById,
    deleteAdoptionPetById,
  };
};

module.exports = adoptionPetController;
