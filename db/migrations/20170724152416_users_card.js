
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_card', (table) => {
    table.integer('user_id')
    table.integer('card_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_card')
};
