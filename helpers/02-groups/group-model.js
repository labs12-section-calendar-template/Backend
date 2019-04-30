const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    getGroupTemplates,
}

function find(){
    return db('groups');
}


function findById(id){
    return db('groups').where({ id }).first()
}


function getGroupTemplates(groupID){
    return db('templates')
        .join('groups', 'groups.id', 'templates.group_id')
        .select('templates.*' )
        .where('templates.group_id', groupID)
}
