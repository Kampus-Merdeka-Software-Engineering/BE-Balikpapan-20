const express = require('express');
const { priceController} = require('../controllers');
const router = express.Router();

// get all check
router.get('/price', priceController.getPrice);
// router.post('/check', priceController.createTarif);



module.exports = router;