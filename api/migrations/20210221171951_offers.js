exports.up = function (knex) {
  return knex.schema.createTable("offers", function (table) {
    table.increments();
    table.string("name").unique();
    table.string("description", 500);
    table.string("url");
    table.boolean("isPremium");
    table.boolean("isDisabled");
    table.datetime("starts_at");
    table.datetime("ends_at");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("offers");
};
