const Admin = require('../models/Admin');

function auth(req, res) {
  const { username, password } = req.body;

  //Check for existing user
  Admin.findOne({ username }).then(admin => {
    if (!admin) {
      return res.status(400).json({ msg: 'Admin does not exist' });
    }
    if (username === admin.username && password === admin.password) {
      res.json(admin);
    } else {
      return res.status(400).json({ msg: 'Wrong Username or Password' });
    }
  });
}

module.exports = auth;
