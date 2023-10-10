const express = require("express");
const  tarifControllers  = require("../controllers/tarifController");
const tarifRoutes = express.Router();

tarifRoutes.get("/tarif", tarifControllers.getTarif);


module.exports = {tarifRoutes};
