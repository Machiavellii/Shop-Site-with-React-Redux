const express = require('express');
const router = express.Router();

//Admin Model
const Admin = require('../../models/Admin');

// @route GET api/admin
// @Desc GET admin
// @access Public
router.get('/', (req, res) => {
  Admin.find()
    .then(admin => res.json(admin))
    .catch(err => res.status(404).json('Admin not found'));
});

// @route POST api/admin
// @Desc Register admin
// @access Public
router.post('/', (req, res) => {
  const { username, password } = req.body;

  //Validation
  if (!username || !password) {
    return res.status(404).json({ msg: 'Please enter all fields' });
  }

  //Check for existing user
  Admin.findOne({ username }).then(admin => {
    if (admin) {
      return res.status(400).json({ msg: 'Admin already exist' });
    }

    const newAdmin = new Admin({
      username,
      password
    });

    newAdmin.save(admin => res.json(admin));
  });
});

module.exports = router;
