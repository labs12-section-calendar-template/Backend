
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
  
        tbl.increments();

        tbl.string('fullname', 255).notNullable()
        tbl.string('email', 255).notNullable()
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        tbl.string('password', 255).notNullable()

        tbl.boolean('isAdmin').default(false);
  
    })

    .createTable('groups', (tbl) => {

        tbl.increments();

        tbl.integer('joinCode', 4).notNullable().unique();

        tbl.string('name', 255).notNullable();

        tbl.boolean('isLocked').default(true);

        tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })

    .createTable('templates', (tbl) => {
        tbl.increments();

        tbl.string('title', 255).notNullable()

        tbl.string('description', 255).notNullable()

        tbl.string('cycleLength').notNullable()

        tbl.date('dateRange', 255).notNullable()

        tbl.string('color', 255).notNullable()

        tbl.integer('group_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('events', (tbl) => {
        tbl.increments();

        tbl.date('date', 255).notNullable()

        tbl.string('time', 255).notNullable()

        tbl
        .string('template_color', 255)
        .notNullable()
        .references('color')
        .inTable('templates')

        tbl.integer('template_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })
}

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('groups')
    .dropTableIfExists('templates')
    .dropTableIfExists('events')
};
