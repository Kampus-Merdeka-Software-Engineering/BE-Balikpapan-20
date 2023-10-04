const { prisma } = require('../config/prisma');


async function getPrice(origin, destination, weight) {
  try {
    const basePrice = await prisma.tarif.findFrist({
      where: {
        AND: [
          {origin: origin},
          {destination: destination},
          {weight: weight}
        ]
      }
    })
    console.log(basePrice)

    const finalPrice = basePrice.price * weight;
    return {
      Price: finalPrice
    }
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}


module.exports = {
  getPrice,
};
