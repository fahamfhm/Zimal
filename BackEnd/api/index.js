const express = require('express');
const cors = require('cors');
const foodRoutes = require('../routes/foods'); // Adjust path as necessary
const cosmeticsRoutes = require('../routes/cosmetics');
const spicesRoutes = require('../routes/spices.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));

// Routes
app.use('/foods', foodRoutes);
app.use('/cosmetics', cosmeticsRoutes);
app.use('/spices', spicesRoutes);

module.exports = app;
