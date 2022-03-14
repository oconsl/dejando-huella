const usersController = (User) => {

  // POST
  const postUser = async (req, res, next) => {
    try{
      // const user = new User(req.body);
      // await user.save();
      // res.status(200).json(user);
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
        password
      });

      if ( req.file) {
        const {filename} = req.file;
        user.imgURL = user.setImgUrl(filename);
      }

      const userStored = await user.save();
      res.send({userStored});
    }catch(err){
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
      const filename = req.file.filename;
      const user = await User.findById(req.params.userId);
      const url = user.setImgUrl(filename);
      // const response = await User.findByIdAndUpdate(req.params.userId,
      //   {
      //     firstName: body.firstName,
      //     lastName: body.lastName,
      //     email: body.email,
      //     username: body.username,
      //     password: body.password,
      //     imgURL: url
      // });
      const response = await User.updateOne({
        _id: req.params.userId
      },
      {
        $set:{
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          username: body.username,
          password: body.password,
          imgURL: url,
        }
      })
      res.json(response);
    }catch(err){
      res.status(500).json("Mongo's error");
    }
  }

  // DELETE
  const deleteUser = async (req, res, next) => {
    try{  
      const id = req.params.userId; 
      await User.findByIdAndDelete(id);
      res.json('Deleted');
    }catch(err){
      res.status(500).json("Mongo's error");
    }
  }


  return {postUser, getUsers, putUser, deleteUser}
};

module.exports = usersController;