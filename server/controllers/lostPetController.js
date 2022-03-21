const lostPetController = (LostPet) => {
  const getLostPets = async (req, res) => {
    const { query } = req;
    const response = await LostPet.find(query);
    res.json(response);
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
      const id = req.params.lostPetsId;
      const response = await LostPet.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            username: body.userName,
            petName: body.petName,
            description: body.description,
            phone: body.phone,
            addressNumber: body.addressNumber,
            addressRoad: body.addressRoad,
            latLng: body.latLng,
            image: body.image,
            date: body.date,
            filter: body.filter,
          },
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

  const deleteLostPetById = async (req, res) => {
    try {
      const id = req.params.lostPetsId;
      await LostPet.findByIdAndDelete(id);
      res.json('Pet has been deleted.');
    } catch (err) {
      res.json('Error');
    }
  };

  return { getLostPets, postLostPet, putLostPetById, deleteLostPetById };
};

module.exports = lostPetController;
