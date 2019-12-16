const express = require('express');
const cors = require('cors');

const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));
  