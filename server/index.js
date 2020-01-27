const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes middleware
app.use('/api/products', require('./routes/products'));
app.use('/api/productcategories', require('./routes/productCategories'));
app.use('/api/history', require('./routes/inouthistory'))
app.use('/api/orders', require('./routes/orders'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/suppliers', require('./routes/suppliers'));

// db config
const { mongoURI } = require('./config/database')
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
mongoose.set('bufferCommands', false);
// Connect to mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Handle production
//if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
//}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
