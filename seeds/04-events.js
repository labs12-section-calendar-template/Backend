
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          date: '04/29/2019',
          time: '10:00am - 1:00pm',
          template_color: 'red',
          template_id: 1,
          user_id: 1
        },

       {  
        date: '04/30/2019',
        time: '10:00am - 1:00pm',
        template_color: 'red',
        template_id: 1,
        user_id: 1
        },

       { 
        date: '05/01/2019',
        time: '10:00am - 1:00pm',
        template_color: 'red',
        template_id: 1,
        user_id: 1
       }

      ]);
    });
};
