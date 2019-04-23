const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

// @route POST api/auth
// @Desc Authenticated Admin
// @access Private
router.post('/admin', auth, (req, res) => {
  const { username, password } = req.body;
  //Validation
  if (!username || !password) {
    return res.status(404).json({ msg: 'Please enter all fields' });
  }
});

module.exports = router;
