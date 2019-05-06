const express = require('express');
const router = express.Router();
const Admin = require('../../models/Admin');

const auth = require('../../validation/auth');

// @route POST api/auth
// @Desc Authenticated Admin
// @access Private
router.post('/', (req, res) => {
  let { errors, isValid } = auth(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne().then(user => {
    if (user.username !== username) {
      errors.username = 'Incorrect Username';
      return res.status(404).json(errors);
    } else if (user.password !== password) {
      errors.password = 'Incorrect Password';
      return res.status(404).json(errors);
    }
    res.json(user);
  });
});

module.exports = router;
