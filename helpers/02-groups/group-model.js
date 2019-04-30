const db = require("../../database/dbConfig");

module.exports = {
  find,
  getById
};

function find() {
  return db("groups");
}

function getById(id) {
  return db("groups")
    .where({ id })
    .first();
}
