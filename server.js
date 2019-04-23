const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

//Models
const products = require('./routes/api/product');
const admin = require('./routes/api/admin');
const auth = require('./routes/api/auth');
const blog = require('./routes/api/blog');

const app = express();

//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//Database
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/products', products);
app.use('/api/admin', admin);
app.use('/api/auth', auth);
app.use('/api/blog', blog);

//Server Static assets if is production
if (process.env.NODE_ENV === 'production') {
  //Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
