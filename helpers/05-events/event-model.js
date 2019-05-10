const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  getBy,
  update
};

function find() {
  return db("events");
}

function findById(id) {
  return db("events")
    .where({ id })
    .first();
}

async function add(event) {
  const [id] = await db("events").insert(event, "*");

  return db("events")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("events")
    .where({ id })
    .update(changes, "*");
}

function remove(id) {
  return db("events")
    .where({ id })
    .del();
}

function getBy(select) {
  return db("events")
    .where(select)
    .first();
}

