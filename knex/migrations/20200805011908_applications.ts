import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('applications', (table: Knex.TableBuilder) => {
    table.increments();
    table.string('nickname').notNullable();
    table.string('meaning').notNullable();
    table.string('pronunciation').notNullable();
    table.string('status').notNullable();
    table.boolean('accepted').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('applications');
}

