const express = require("express");
const  tarifControllers  = require("../controllers/tarifController");
const tarifRoutes = express.Router();

tarifRoutes.get("/", tarifControllers.getTarif);


module.exports = {tarifRoutes};
