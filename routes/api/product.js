const express = require('express');
const router = express.Router();

const multer = require('multer');

//Validation
const validationProductInput = require('../../validation/product');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

//Product Model
const Product = require('../../models/Product');

// @route   GET api/products/test
// @desc    Tests product route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Products Works' }));

// @route   GET api/products
// @desc    GET all products route
// @access  Public
router.get('/', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err =>
      res.status(404).json({ noproductsfound: 'No products found' })
    );
});

// @route   GET api/products/:id
// @desc    GET products by id
// @access  Public
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err =>
      res
        .status(404)
        .json({ noproductsfound: 'No products found with that ID' })
    );
});

// @route   POST api/products/
// @desc    POST Create Product
// @access  private
router.post('/', upload.single('productImage'), (req, res) => {
  const { errors, isValid } = validationProductInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProduct = new Product({
    productImage: req.file.path,
    product: req.body.product,
    action: req.body.action,
    popular: req.body.popular,
    gender: req.body.gender,
    price: req.body.price,
    model: req.body.model
  });

  newProduct.save().then(product => res.json(product));
});

// @route DELETE api/product/:id
// @Desc Delete a  product
// @access Private
router.delete('/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
