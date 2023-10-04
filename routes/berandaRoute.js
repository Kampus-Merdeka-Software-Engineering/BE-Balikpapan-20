const express = require("express");

const { berandaController } = require("../controllers");

const router = express.Router();

// get all beranda place
// router.get('/', (req, res) => {
//     console.log('masuk ke path /berandaRoute');

//     res.json({name: 'OK'});
// })

router.get("/beranda", berandaController.getBeranda);

// creat new place

// get a place by id

// Update place by id

// Delet place by id

// module export
module.exports = router;
