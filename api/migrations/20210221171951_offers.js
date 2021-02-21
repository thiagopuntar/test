exports.up = function (knex) {
  return knex.schema.createTable("offers", function (table) {
    table.increments();
    table.string("name");
    table.string("description", 500);
    table.string("url");
    table.boolean("isPremium");
    table.date("starts_at");
    table.date("ends_at");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("offers");
};
