const express = require("express");
const { prisma } = require("../config/prisma");
const {
  getLacakControllers,
  getlacakByIdController,
  createLacakController,
} = require("../controllers/lacakController");
const lacakRoutes = express.Router();

lacakRoutes.get("/", getLacakControllers);

lacakRoutes.post("/", createLacakController);

lacakRoutes.get("/:id", getlacakByIdController);

module.exports = { lacakRoutes };
