const db = require("./knex");

module.exports = class BaseDao {
  constructor(tableName) {
    this.db = db;
    this.tableName = tableName;
  }

  async findAll() {
    return this.db(this.tableName);
  }

  async findByPk(id) {
    const [data] = await this.db(this.tableName).where("id", id);
    return data;
  }

  async insert(data) {
    const id = await this.db(this.tableName).insert(data);
    return this.findByPk(id);
  }

  async update(data) {
    await this.db(this.tableName).where("id", data.id).update(data);
    return this.findByPk(data.id);
  }

  async del(id) {
    return this.db(this.tableName).where("id", id).del();
  }
};
