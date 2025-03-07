/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("words").del();

  await knex("words").insert([
    { id: 1, word: "dog" },
    { id: 2, word: "cat" },
    { id: 3, word: "fish" },
  ]);
}
