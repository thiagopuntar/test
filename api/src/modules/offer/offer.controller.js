const service = require("./offer.service");

class OfferController {
  async listAll(req, res) {
    const offers = await service.listAll();
    res.json(offers);
  }

  async listEnabled(req, res) {
    const offers = await service.listEnabled();
    res.json(offers);
  }

  async save(req, res) {}

  async update(req, res) {}

  async remove(req, res) {}

  async changeStatus(req, res) {}
}

module.exports = new OfferController();
