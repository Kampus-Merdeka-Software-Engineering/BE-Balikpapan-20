const  tarifService  = require('../services/tarifService');


async function getTarif(req, res) {
  const origin = req.query.origin;
  const destination = req.query.destination;
  const weight = req.query.weight;

  const tarif = await tarifService.getTarif(origin, destination, weight);

  res.status(200).json(tarif);
}

module.exports = {
  getTarif
};
