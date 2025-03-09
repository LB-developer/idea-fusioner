/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("ideas").del();

  await knex("ideas").insert([
    { id: 1, idea: "dog" },
    { id: 2, idea: "cat" },
    { id: 3, idea: "fish" },
  ]);
}
