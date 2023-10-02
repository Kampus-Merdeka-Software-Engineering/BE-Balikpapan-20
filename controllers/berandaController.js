const { berandaService } = require('../services/berandaService');

async function getBeranda(req, res) {
    const beranda = await berandaService.getAllBeranda();

    res.status(200).json(beranda);
}

module.exports = {
    getBeranda
};