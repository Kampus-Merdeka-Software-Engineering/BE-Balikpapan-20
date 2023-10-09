const {
  getTarifService,
  getTarifByIdService,
  createTarifService,
} = require("../services/tarifService");

const getTarifControllers = async (req, res) => {
  const tarif = await getTarifService();
  res.status(200).json(tarif);
};

const getTarifByIdController = async (req, res) => {
  const tarif = await getTarifByIdService(req.params.id);
  if (!tarif || tarif.length === 0) {
    res.status(404).json({
      message: "Tarif barang tidak ditemukan",
    });
  }
  res.status(200).json(tarif);
};

// ini bagian created Tarif, method POST
const createTarifController = async (req, res) => {
  const createdTarif = await createTarifService(req.body);
  if (!createdTarif) {
    res.status(400).json({
      message: "Tarif gagal di buat",
    });
  }

  res.status(201).json({
    message: "Data berhasil di buat",
    data: createdTarif,
  });
};

module.exports = {
  getTarifControllers,
  getTarifByIdController,
  createTarifController,
};
