const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    findByGoogleId,
    add,
    getBy,
    remove,
    getUserGroups,
    addGroupToUser,
    update

}

function find(){
    return db('users');
}

function findById(id){
    return db('users').where({ id }).first()
}

function findByGoogleId(profileId){
    return db('users').where({ googleId: profileId }).first()
}

async function add(user){
    const [id] = await db('users').insert(user, "*");
    console.log(id)
    
    return db('users').where({ id }).first()
}

function getBy(select){
    return db('users').where(select).first();
}


function remove(id){
    return db('users').where({ id }).del()
}

function getUserGroups(userID){
    return db('groups')
        .join('users', 'users.id', 'groups.user_id')
        .select('groups.*' )
        .where('groups.user_id', userID)
}

async function addGroupToUser(group){
    const [id] = await db("groups")
    .insert({
        joinCode: group.joinCode,
        name: group.name,
        user_id: group.user_id
    }, "id" );
    return db("groups")
        .where({ id })
        .first();
}

function update(id, updates) {
    return db("users")
      .where({ id })
      .update(updates, "users.premiumStatus");
  }
