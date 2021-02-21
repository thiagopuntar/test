const Dao = require("./offer.dao");
const dao = new Dao();

class OfferService {
  async listAll(req, res) {
    const offers = await dao.findAll();
    return offers;
  }

  async listEnabled(req, res) {
    const offers = await dao.findEnabled();
    return offers;
  }

  async save(req, res) {}

  async update(req, res) {}

  async remove(req, res) {}

  async changeStatus(req, res) {}
}

module.exports = new OfferService();
