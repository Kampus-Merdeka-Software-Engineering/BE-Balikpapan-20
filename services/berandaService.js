const { Prisma, PrismaClient } = require('@prisma/client');
const { prisma } = require('../config/prisma');

async function getAllBeranda() {
    try {
        const beranda = await prisma.beranda.findMany();

        return beranda;
    } catch (error) {
        console.error(error);

        throw new Error(); 
    }
}

// module export
module.exports = {
    getAllBeranda
};