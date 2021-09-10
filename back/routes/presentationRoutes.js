const express = require('express');
const router = express.Router();
const { getAllPresentations, getPresentationById} = require('../controller/presentationControllers')

//Get all products/ GET /api/products
router.get('/', getAllPresentations);

//Get one product/ GET /api/products/:id
router.get('/:id', getPresentationById);

module.exports = router;