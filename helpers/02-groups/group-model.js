const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  getBy,
  remove,
  getGroupTemplates,
  update
};

function find(){
  return db('templates');
}

function getBy(select) {
  return db("groups")
    .where(select)
    .first();
}

function findById(id) {
  return db("groups")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("groups").insert(user);

  return db("groups")
    .where({ id })
    .first();
}

function getBy(select) {
  return db("groups")
    .where(select)
    .first();
}

function remove(id) {
  return db("groups")
    .where({ id })
    .del();
}

function getGroupTemplates(groupID) {
  return db("templates")
    .join("groups", "groups.id", "templates.group_id")
    .select("templates.*")
    .where("templates.group_id", groupID);
}

function update(id, updates) {
  return db("groups")
    .where({ id })
    .update(updates);
}
