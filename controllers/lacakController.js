const {
  getLacakService,
  getlacakByIdService,
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

module.exports = {
  getLacakControllers
};
