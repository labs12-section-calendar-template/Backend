const moment = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('templates').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('templates').insert([

        {
          title: 'Rock Climbing Meetups',
          description: "Meetup with us on the selected dates and times to experience the joys of standing below a rock; and then on top of one.",
          startDate: '2019-05-13',
          endDate: '2019-07-13',
          date: moment().format("YYYY-MM-DD"),
          color: 'red',
          group_id: 1
        }
       
      ]);
    });
};
