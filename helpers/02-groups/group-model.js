const db = require('../../database/dbConfig');

module.exports = {
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

function getBy(select){
    return db('groups').where(select).first();
}


function remove(id){
    return db('groups').where({ id }).del()
}

function getGroupTemplates(groupID){
    return db('templates')
        .join('groups', 'groups.id', 'templates.group_id')
        .select('templates.*' )
        .where('templates.group_id', groupID)
}