const knex = require('knex')

async function up(knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary();
        table.string('task').notNullable();
        table.boolean('done').notNullable();
        table.integer('student_id')
            .notNullable()
            .references('id')
            .inTable('students');
    });
};

async function down() {
    return knex.schema.dropTable('tasks');
};

module.exports = {
    up,
    down
}