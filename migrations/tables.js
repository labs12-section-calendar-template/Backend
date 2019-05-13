
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
  
        tbl.increments();

        tbl.string('fullname', 255)
        tbl.string('email', 255)
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        tbl.string('googleId', 255)
        
        tbl.string('password', 255)
  
    })

    .createTable('groups', (tbl) => {

        tbl.increments();

        tbl.integer('joinCode', 8).notNullable().unique();

        tbl.string('name', 255).notNullable();

        tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })

    .createTable('members', (tbl) => {
        tbl.increments();

        tbl.integer('user_id').unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.integer('group_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })

    .createTable('templates', (tbl) => {
        tbl.increments();

        tbl.string('title', 255).notNullable()

        tbl.string('description', 255).notNullable()

        tbl.date('startDate', 255).notNullable()
        tbl.date('endDate', 255).notNullable()

        tbl.date('date', 255).notNullable()

        tbl.string('color', 255).notNullable()

        tbl.integer('group_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('events', (tbl) => {
        tbl.increments();

        tbl.string('title', 255).notNullable()

        tbl.string('description', 255)

        tbl.boolean('repeat').default(true)

        tbl.date('date', 255).notNullable()

        tbl.string('time', 255).notNullable()

        tbl.integer('template_id')
        .unsigned()
        .references('id')
        .inTable('templates')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('groups')
    .dropTableIfExists('members')
    .dropTableIfExists('templates')
    .dropTableIfExists('events')
};
