
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          title: 'TITLE',
          description: 'Descripting',
          date: '04/29/2019',
          time: '10:00am - 1:00pm',
          template_id: 1
        },

       {  
        title: 'TITLE',
        description: 'Descripting',
        date: '04/30/2019',
        time: '10:00am - 1:00pm',
        template_id: 1
        },

       { 
        title: 'TITLE',
        description: 'Descripting',
        date: '05/01/2019',
        time: '10:00am - 1:00pm',
        template_id: 1
       }

      ]);
    });
};
