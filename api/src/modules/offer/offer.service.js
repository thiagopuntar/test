const Dao = require("./offer.dao");
const dao = new Dao();
const Joi = require("joi");
const dayjs = require("dayjs");
class OfferService {
  async listAll() {
    const offers = await dao.findAll();
    const offersTransformed = offers.map((data) => {
      const today = dayjs();

      if (today.isBefore(dayjs(data.starts_at))) {
        data.state = "disabled";
        return data;
      }

      if (!data.ends_at) {
        data.state = "enabled";
        return data;
      }

      data.state = today.isBefore(dayjs(data.ends_at)) ? "enabled" : "disabled";
      return data;
    });

    return offersTransformed;
  }

  async listEnabled() {
    const offers = await dao.findEnabled();
    return offers;
  }

  async save(data) {
    const savedOffer = await dao.insert(data);
    return savedOffer;
  }

  async validateSave(data) {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required().max(500),
      url: Joi.string().dataUri(),
      isPremium: Joi.boolean(),
      starts_at: Joi.string().regex(/\d{4}\/\d{2}\/\d{2}/),
      ends_at: Joi.string().regex(/\d{4}\/\d{2}\/\d{2}/),
    });

    return schema.validate(data);
  }

  async getById(id) {
    return dao.findByPk(id);
  }

  async update(id, data) {
    return dao.update({ id, ...data });
  }

  async remove(id) {
    return dao.del(id);
  }

  async changeStatus(offerId, newStatus) {
    return dao.update({ id: offerId, isDisabled: newStatus });
  }
}

module.exports = new OfferService();
