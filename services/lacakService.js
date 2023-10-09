const { prisma } = require("../config/prisma");

const getLacakService = async () => {
  const lacak = await prisma.lacak.findMany();
  console.log("barang sedang di lacak", lacak);
  // lacak = []
  if (lacak.length === 0) {
    return {
      message: "Tidak dapat melacak barang",
    };
  }
  return lacak;
};

const getlacakByIdService = async (id) => {
  const lacak = await prisma.lacak.findUnique({
    where: {
      id: Number(id),
    },
  });
  return lacak;
};

// ini bagian Create Lacak, method POST
const createLacakService = async (body) => {
  const { id, nama, numberTelpon, statusPengiriman } = body;
  console.log(body);

  const createdLacak = await prisma.lacak.create({
    data: {
      id: Number(id),
      nama,
      numberTelpon: Number(numberTelpon),
      statusPengiriman,
    },
  });
  return createdLacak;
};

module.exports = { getLacakService, getlacakByIdService, createLacakService };
