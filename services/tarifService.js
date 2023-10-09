const { prisma } = require("../config/prisma");

const getTarifService = async () => {
  const tarif = await prisma.tarif.findMany();
  if (tarif.length === 0) {
    return {
      message: "Tidak ada tarif barang",
    };
  }
  return tarif;
};

const getTarifByIdService = async (id) => {
  const tarif = await prisma.tarif.findUnique({
    where: {
      id: Number(id),
    },
  });
  return tarif;
};

// ini bagian Create Tarif, method POST
const createTarifService = async (body) => {
  const { id, origin, destination, price } = body;
  console.log(body);

  const createdTarif = await prisma.tarif.create({
    data: {
      id: Number(id),
      origin,
      destination,
      price: Number(price),
    },
  });
  return createdTarif;
};

module.exports = { getTarifService, getTarifByIdService, createTarifService };
