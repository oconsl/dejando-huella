const usersController = (User) => {

  // POST
  const postUser = async (req, res, next) => {
    try{
      const user = new User(req.body);
      await user.save();
      res.status(200).json(user);
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
          avatar: body.avatar,
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