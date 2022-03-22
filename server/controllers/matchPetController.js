const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const matchPetController = (MatchPet) => {
  //GET
  const getMatchPet = async (req, res) => {
    const { query } = req;
    const response = await MatchPet.find(query);
    res.json(response);
  };

  //POST
  const postMatchPet = async (req, res) => {
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path);

      const { username, petName, testimony } = req.body;

      const matchPet = MatchPet({
        username,
        petName,
        testimony,
        imageURL: result.url,
        cloudinary: result.public_id,
      });

      await matchPet.save();
      res.json('Uploaded successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  //PUT
  const putMatchPetById = async (req, res) => {
    try {
      const { body } = req;

      const result = await cloudinary.v2.uploader.upload(req.file.path);

      const response = await MatchPet.findByIdAndUpdate(req.params.matchPetId, {
        username: body.username,
        petName: body.petName,
        testimony: body.testimony,
        image: body.image,
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
  const deleteMatchPetById = async (req, res) => {
    try {
      const id = req.params.matchPetId;
      const matchPet = await MatchPet.findByIdAndDelete(id);

      cloudinary.v2.uploader.destroy(matchPet.cloudinary);

      res.json('Deleted successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  return {
    getMatchPet,
    postMatchPet,
    putMatchPetById,
    deleteMatchPetById,
  };
};

module.exports = matchPetController;
