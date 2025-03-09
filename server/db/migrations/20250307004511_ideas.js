/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable("ideas", (table) => {
    table.increments("id");
    table.string("idea").notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable("ideas");
}
