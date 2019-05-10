const db = require("../../database/dbConfig");

module.exports = {
    find,
    remove,
    getMembersGroups,
    getBy
};

function find(){
    return db('members');
}

function remove(id) {
    return db("members")
      .where({ id })
      .del();
  }

  function getBy(select) {
    return db("members")
      .where(select)
      .first();
  }

  function getMembersGroups(memberId){
    return db("groups")
      .join("members", "members.group_id", "groups.id")
      .select("groups.*")
      .where("groups.id", memberId)
  }