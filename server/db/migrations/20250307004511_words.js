/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable("words", (table) => {
    table.increments("id");
    table.string("word").notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable("words");
}
