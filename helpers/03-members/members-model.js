const db = require("../../database/dbConfig");

module.exports = {
    find,
    remove
};

function find(){
    return db('members');
}

function remove(id) {
    return db("members")
      .where({ id })
      .del();
  }