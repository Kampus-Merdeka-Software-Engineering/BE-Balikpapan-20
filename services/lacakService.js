const { prisma } = require('../config/prisma');

async function getAllLacak() {
  try {
    const lacak = await prisma.lacak.findMany();

    return lacak;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}



module.exports = {
  getAllLacak,
  createTarif
};
