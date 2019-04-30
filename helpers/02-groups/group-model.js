const db = require("../../database/dbConfig");

module.exports = {
<<<<<<< HEAD
  find,
  findById,
  add,
  getBy,
  remove,
  getGroupTemplates,
  update
};
=======
    find,
    findById,
    add,
    update,
    getBy,
    remove,
    getGroupTemplates
}

function find(){
    return db('groups');
}

function findById(id){
    return db('groups').where({ id }).first()
}

async function add(group){
    const [id] = await db('groups').insert(group);

    return db('groups').where({ id }).first()
}

function update(id, changes){
    return db('groups')
        .where({ id })
        .update(changes);
}
>>>>>>> a8022f9355ea83357d99c0edc1a78c55a1e68554

function getBy(select){
    return db('groups').where(select).first();
}

<<<<<<< HEAD
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
=======

function remove(id){
    return db('groups').where({ id }).del()
}

function getGroupTemplates(groupID){
    return db('templates')
        .join('groups', 'groups.id', 'templates.group_id')
        .select('templates.*' )
        .where('templates.group_id', groupID)
}

>>>>>>> a8022f9355ea83357d99c0edc1a78c55a1e68554
