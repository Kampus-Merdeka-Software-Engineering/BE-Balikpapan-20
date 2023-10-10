const express = require("express");
const { prisma } = require("../config/prisma");
const {
  getLacakControllers,
} = require("../controllers/lacakController");
const lacakRoutes = express.Router();

lacakRoutes.get("/", getLacakControllers);



module.exports = { lacakRoutes };
