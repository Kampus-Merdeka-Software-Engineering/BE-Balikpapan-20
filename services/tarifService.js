const { prisma } = require("../config/prisma");

async function getTarif(origin, destination, weight) {
  try {
    if (origin === destination) {
      return {
        tarif: 20000 * weight
      };
    }
    const baseTarif = await prisma.tarif.findFirst({
      where: {
        AND: [
        {origin: origin},
        { destination: destination}
        ]
      }
    });
    const finalTarif = baseTarif?.price *  weight;

    return {
      tarif: finalTarif,
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getTarif };
