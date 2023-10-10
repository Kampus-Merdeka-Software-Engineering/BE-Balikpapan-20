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


// ini bagian Create Lacak, method POST


module.exports = { getLacakService };
