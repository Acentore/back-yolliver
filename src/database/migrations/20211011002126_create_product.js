exports.up = function (knex) {
  return knex.schema.createTable("product", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.decimal("price").notNullable();
    table.decimal("quantity").notNullable();
    table.string("description").notNullable();
    table.string("category").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product");
};
