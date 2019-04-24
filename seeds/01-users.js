const faker = require('faker');

  function repeat(n){
    array = [{
      fullName: 'Jake Mcfaul',
      email: 'jake@yahoo.com',
      username: 'jakefromstatefarm',
      password: 'jake'
    },
    {
      fullName: 'Max Trestman',
      email: 'max@yahoo.com',
      username: 'maxfromstatefarm',
      password: 'max'
    },
    {
      fullName: 'Terrell Tullis',
      email: 'terrell@yahoo.com',
      username: 'terrellfromstatefarm',
      password: 'terrel'
    },
    {
      fullName: 'Ilya Yelizarov',
      email: 'ilya@yahoo.com',
      username: 'ilyafromstatefarm',
      password: 'ilya'
    },
              ];
     for(let i = 0; i < n; i++){
      array.push({
        fullName: faker.name.findName(), 
        email: faker.internet.email(), 
        username: faker.internet.userName(), 
        password: faker.name.firstName(), 
        })
     }
     return array;
  }

  function repeatTwo(n){
    array = [];
     for(let i = 0; i < n; i++){
      array.push({
        fullName: faker.name.findName(), 
        email: faker.internet.email(), 
        username: faker.internet.userName(), 
        password: faker.name.firstName(), 
        })
     }
     return array;
  }

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(async function () {
      // Inserts seed entries
       await knex('users').insert( repeat(244))
       await knex('users').insert(repeatTwo(3))
       return knex('users').insert( repeatTwo(249) );
    });
};
