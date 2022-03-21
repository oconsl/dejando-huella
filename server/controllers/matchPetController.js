const matchPetController = (MatchPet) => {
  const getMatchPets = async (req, res) => {
    const { query } = req;
    const response = await MatchPet.find(query);
    res.json(response);
  };

  const postMatchPet = async (req, res) => {
    try {
      const matchPet = new MatchPet(req.body);
      await matchPet.save();
      res.json(matchPet);
    } catch (err) {
      res.json('Error');
    }
  };

  const putMatchPetById = async (req, res) => {
    try {
      const { body } = req;
      const response = await MatchPet.findByIdAndUpdate(
        req.params.matchPetsId,
        {
          username: body.userName,
          petName: body.petName,
          testimony: body.testimony,
          image: body.image,
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

  const deleteMatchPetById = async (req, res) => {
    try {
      const id = req.params.matchPetsId;
      await MatchPet.findByIdAndDelete(id);
      res.status(202).json('Testimony has been deleted.');
    } catch (err) {
      res.json('Error');
    }
  };

  return {
    getMatchPets,
    postMatchPet,
    putMatchPetById,
    deleteMatchPetById,
  };
};

module.exports = matchPetController;
