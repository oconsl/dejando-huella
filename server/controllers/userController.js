const fs = require('fs-extra');

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const usersController = (User) => {

  // POST
  const postUser = async (req, res, next) => {
    try{
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      console.log(req.file);

      const {
        firstName,
        lastName,
        email,
        userName,
        password
      } = req.body;

      const user = User({
        firstName,
        lastName,
        email,
        userName,
        password,
        imgURL: result.url,
        public_id: result.public_id
      });

      const userStored = await user.save();
      // console.log(req.file);
      await fs.unlink(req.file.path);
      res.send({userStored});
    }catch(err){
      console.log(req.file);
      res.status(500).json(err);
    }
  }

  // GET
  const getUsers = async (req, res, next) => {
    const {query} = req;
    const response = await User.find(query);
    res.json(response);
  }

  // PUT
  const putUser = async (req, res, next) => {
    try{
      const {body} = req;

      const result = await cloudinary.v2.uploader.upload(req.file.path)
      const updatedUser = await User.findByIdAndUpdate(req.params.userId,
        {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          username: body.username,
          password: body.password,
          imgURL: result.url,
          public_id: result.public_id
      });
      cloudinary.v2.uploader.destroy(updatedUser.public_id);

      // const response = await User.updateOne({
      //   _id: req.params.userId
      // },
      // {
      //   $set:{
      //     firstName: body.firstName,
      //     lastName: body.lastName,
      //     email: body.email,
      //     username: body.username,
      //     password: body.password,
      //     imgURL: url,
      //     public_id
      //   }
      // })
      res.json(updatedUser);
    }catch(err){
      res.status(500).json(err);
    }
  }

  // DELETE
  const deleteUser = async (req, res, next) => {
    try{  
      const id = req.params.userId; 
      const user = await User.findByIdAndDelete(id);
      cloudinary.v2.uploader.destroy(user.public_id);
      res.json('Deleted');
    }catch(err){
      res.status(500).json("Mongo's error");
    }
  }


  return {postUser, getUsers, putUser, deleteUser}
};

module.exports = usersController;