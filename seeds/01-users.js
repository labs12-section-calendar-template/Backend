
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([

        {
         fullName: 'Jacob McFaul', 
         email: 'jake@yahoo.com', 
         username: 'jakefromstatefarm', 
         password: 'jake', 
         isAdmin: false 
        },

        {
         fullName: 'Max TrestMan', 
         email: 'max@yahoo.com', 
         username: 'maxfromstatefarm', 
         password: 'max', 
         isAdmin: false 
        },

        {
         fullName: 'Terrell Tullis',
         email: 'terrell@yahoo.com', 
         username: 'terrellfromstatefarm', 
         password: 'terrel', 
         isAdmin: false 
        },

        {
         fullName: 'Ilya Yelizarov', 
         email: 'ilya@yahoo.com', 
         username: 'ilyafromstatefarm', 
         password: 'ilya', 
         isAdmin: false 
        },

      ]);
    });
};
