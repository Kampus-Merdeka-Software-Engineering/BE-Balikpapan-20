const {
  getLacakService,
  getlacakByIdService,
  createLacakService,
} = require("../services/lacakService");

const getLacakControllers = async (req, res) => {
  const lacak = await getLacakService();
  res.status(200).json(lacak);
};

const getlacakByIdController = async (req, res) => {
  const lacak = await getlacakByIdService(req.params.id);
  if (!lacak || lacak.length === 0) {
    res.status(404).json({
      message: "lacak barang tidak ditemukan",
    });
  }
  res.status(200).json(lacak);
};

// ini bagian created lacak, method POST
const createLacakController = async (req, res) => {
  const createdLacak = await createLacakService(req.body);
  if (!createdLacak) {
    res.status(400).json({
      message: "Lacak gagal di buat",
    });
  }

  res.status(201).json({
    message: "Data berhasil di buat",
    data: createdLacak,
  });
};

module.exports = {
  getLacakControllers,
  getlacakByIdController,
  createLacakController,
};
