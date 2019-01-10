
exports.up = function(knex, Promise) {
    return knex.schema.createTable('zoos', table => {
        table.increments();
        table.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('zoos');
};
