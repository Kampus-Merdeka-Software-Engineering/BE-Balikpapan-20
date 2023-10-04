const express = require('express');
const { lacakfController } = require('../controllers');
const router = express.Router();

// get all tarif
router.get('/tarif', lacakfController.getLacak);
router.post('/tarif', lacakfController.createLacak);



module.exports = router;