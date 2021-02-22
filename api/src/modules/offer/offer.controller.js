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

  async save(req, res) {
    const { error } = service.validateSave(req.body);

    if (error) {
      return res.status(400).json(error.details);
    }

    const data = await service.save(req.body);
    res.status(201).json(data);
  }

  async getById(req, res) {
    const { id } = req.params;
    const offer = await service.getById(id);
    offer.isPremium = !!offer.isPremium;
    res.json(offer);
  }

  async update(req, res) {
    const { error } = service.validateSave(req.body);
    console.log(req.body);

    if (error) {
      return res.status(400).json(error.details);
    }

    const { id } = req.params;
    const updated = await service.update(id, req.body);

    res.status(200).json(updated);
  }

  async remove(req, res) {
    const { id } = req.params;
    await service.remove(id);
    res.status(204).json({ message: "Removed" });
  }

  async changeStatus(req, res) {
    const { id } = req.params;
    const { disable } = req.body;
    await service.changeStatus(id, disable);
    res.json({ message: "Changed" });
  }
}

module.exports = new OfferController();
