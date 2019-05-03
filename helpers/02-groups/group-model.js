const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  getBy,
  remove,
  getGroupTemplates,
  addTemplateToGroup,
  update
};

function find(){
  return db('groups');
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
  const [id] = await db("groups").insert(user, "*");

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
    .update(updates, "*");
}

function addTemplateToGroup(template){
  return db('templates')
  .insert({
      title: template.title,
      description: template.description,
      cycleLength: template.cycleLength,
      date: template.date,
      color: template.color,
      group_id: template.group_id
  })
}