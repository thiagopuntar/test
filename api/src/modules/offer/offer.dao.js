const BaseDao = require("../../db/BaseDao");
const dayjs = require("dayjs");

class OfferDao extends BaseDao {
  constructor() {
    super("offers");
  }

  async findEnabled() {
    const today = dayjs().format("YYYY-MM-DD");

    return this.db(this.tableName)
      .whereRaw("(isDisabled IS NULL OR isDisabled = 0)")
      .where("starts_at", "<=", today)
      .andWhereRaw(`(ends_at >= '${today}' OR ends_at IS NULL)`);
  }
}

module.exports = OfferDao;
