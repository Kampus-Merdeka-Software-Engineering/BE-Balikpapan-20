const express = require("express");
const { prisma } = require("../config/prisma");
const {
  getTarifControllers,
  getTarifByIdController,
  createTarifController,
} = require("../controllers/tarifController");
const tarifRoutes = express.Router();

tarifRoutes.get("/", getTarifControllers);

tarifRoutes.post("/", createTarifController);

tarifRoutes.get("/:id", getTarifByIdController);

module.exports = { tarifRoutes };
