const knex = require('knex')

async function up(knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
    });
};

async function down() {
    return knex.schema.dropTable('students');
};

module.exports = {
    up,
    down
}