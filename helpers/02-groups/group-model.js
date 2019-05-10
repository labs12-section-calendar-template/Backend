const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  getBy,
  remove,
  getGroupTemplates,
  getGroupMembers,
  addTemplateToGroup,
  addMember,
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

async function add(group) {
  const [id] = await db("groups").insert(group, "*");

  return db("groups")
    .where({ id })
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

function getGroupMembers(groupId){
  return db("members")
    .join("groups", "groups.id", "members.group_id")
    .select("members.*")
    .where("members.group_id", groupId)
}

function update(id, updates) {
  return db("groups")
    .where({ id })
    .update(updates, "groups.name");
}

async function addTemplateToGroup(template){
  const [id] = await db("templates")
  .insert({
      title: template.title,
      description: template.description,
      cycleLength: template.cycleLength,
      date: template.date,
      color: template.color,
      group_id: template.group_id
  }, "id" );

  return db("templates")
  .where({ id })
  .first()

}

function getBy(select) {
  return db("groups")
    .where(select)
    .first();
}

//user enters JC -> gets JC -> then adds user to member db with user_id and group_id

async function addMember(member){
  const [id] = await db("members")
  .insert(member, "id");

  return db("members")
    .where({ id })
    .first();
}