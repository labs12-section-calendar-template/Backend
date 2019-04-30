const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add
}

function find(){
    return db('templates');
}

function findById(id){
    return db('templates').where({ id }).first()
}

async function add(template){
    const [id] = await db('templates').insert(template);

    return db('templates').where({ id }).first()
}
