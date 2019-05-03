const db = require("../../database/dbConfig");

module.exports = {
    find,
    findById,
    add,
    getById,
    remove,
    update,
    getTemplateEvents,
    addEventsToTemplates
}

function find(){
    return db('templates');
}

function findById(id){
    return db('templates').where({ id }).first()
}

async function add(template){
    const [id] = await db('templates').insert(template, "*");

    return db('templates').where({ id }).first()
}

function getById(select){
    return db('templates').where(select).first();
}


function remove(id){
    return db('templates').where({ id }).del()
}

function update(id, changes){
    return db('templates')
        .where({ id })
        .update(changes, "*");
}

function getTemplateEvents(templateID){
    return db('events')
        .join('templates', 'templates.id', 'events.template_id')
        .select('events.*' )
        .where('events.template_id', templateID)
}

function addEventsToTemplates(event){
    return db('events')
    .insert({
        date: event.date,
        time: event.time,
        template_id: event.template_id
    })
}