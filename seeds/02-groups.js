


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {
         joinCode: 1000,
         name: 'Jake\'s Misfits',
         user_id: 1 
        },

        {
         joinCode: 2000,
         name: 'Max\'s Misfits',
         user_id: 2 
        },
        {
         joinCode: 3000,
         name: 'Terrell\'s Misfits',
         user_id: 3 
        },
        {
         joinCode: 4000,
         name: 'Ilya\'s Misfits',
         user_id: 4
        }
      ]);
    });
};
