const BaseDao = require("../../db/BaseDao");
const dayjs = require("dayjs");

class OfferDao extends BaseDao {
  constructor() {
    super("offers");
  }

  async findEnabled() {
    const today = dayjs().format("YYYY-MM-DD");

    return this.db(this.tableName)
      .whereRaw("(isEnabled = 1 OR isEnabled IS NULL")
      .andWhere("startsAt", "<=", today)
      .andWhereRaw(`(endsAt >= ${today} OR endsAt IS NULL)`);
  }
}

module.exports = OfferDao;
