import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('sisters', (table: Knex.TableBuilder) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('nickname').notNullable();
    table.string('tree').notNullable();
    table.string('chapter').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('sisters');
}
