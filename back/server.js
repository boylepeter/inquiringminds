require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const presentationRoutes = require('./routes/presentationRoutes');
const paypal = require('paypal-rest-sdk');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/presentations', presentationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))


