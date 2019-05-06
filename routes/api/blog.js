const express = require('express');
const router = express.Router();

//Blog Model
const Blog = require('../../models/Blog');

//Validation
const validateBlogInput = require('../../validation/blog');

// @route   GET api/blog
// @desc    Get Blog
// @access  Public
router.get('/', (req, res) => {
  Blog.find()
    .sort({ date: -1 })
    .then(blogs => res.json(blogs))
    .catch(err => res.status(404).json({ noblogfound: 'No blog found!' }));
});

// @route   GET api/blog/:id
// @desc    Get Blog by Id
// @access  Public
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err =>
      res.status(404).json({ noblogfound: 'No blog found with that ID!' })
    );
});

// @route POST api/blog
// @Desc Create Blog route
// @access Private
router.post('/', (req, res) => {
  const { errors, isValid } = validateBlogInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newBlog = new Blog({
    title: req.body.title,
    text: req.body.text
  });

  newBlog.save().then(blog => res.json(blog));
});

// @route   DELETE api/blog/:id
// @desc    Delete Blog
// @access  Private
router.delete('/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      blog.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ noblogfound: 'No blog found!' }));
});

module.exports = router;
