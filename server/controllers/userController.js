const jwt = require('jsonwebtoken');

const usersController = (User) => {
  // POST
  const postUser = async (req, res) => {
    try {
      const { firstName, lastName, email, username, password } = req.body;

      const user = User({
        firstName,
        lastName,
        email,
        username,
        password,
      });

      await user.save();

      res.status(200).json('Signed up successfully');
    } catch (err) {
      res.json('Error');
    }
  };

  // GET
  const getUsers = async (req, res) => {
    const { query } = req;
    const response = await User.find(query);
    res.json(response);
  };

  // PUT
  const putUser = async (req, res) => {
    try {
      const { body } = req;

      await User.findByIdAndUpdate(req.params.userId, {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        username: body.username,
        password: body.password,
      });

      res.json('Updated successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  // DELETE
  const deleteUser = async (req, res) => {
    try {
      const id = req.params.userId;
      await User.findByIdAndDelete(id);

      res.json('Deleted successfully.');
    } catch (err) {
      res.json('Error');
    }
  };

  // GET USER BY ID
  const getUserById = async(req, res) => {
    try{
        const { params } = req;
        const response = await User.findById(params.userId);

        res.json(response);
    }catch(err){
      res.json('Error');
    }
}

  // LOGIN
  const login = async (req, res) => {
    try {
      const { body } = req.body;
      const response = await User.findOne({ username: body.username });

      if (response === null || body.password !== response.password) {
        return res.json('Invalid credentials');
      }
      const token = generateToken(response);
      res.status(200).json(token);
    } catch (err) {
      res.json('Error');
    }
  };

  const generateToken = (user) => {
    const tokenPayload = {
      username: user.username,
    };
    return jwt.sign(tokenPayload, process.env.TOKEN_SECRET, {
      expiresIn: '30m',
    });
  };

  return { postUser, getUsers, putUser, deleteUser, login, getUserById };
};

module.exports = usersController;
