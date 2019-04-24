const faker = require('faker');
const bcrypt = require('bcryptjs');

  function repeat(n){
    array = [{
      fullName: 'Jake Mcfaul',
      email: 'jake@yahoo.com',
      username: 'jakefromstatefarm',
      password: bcrypt.hashSync('jake', 10)
    },
    {
      fullName: 'Max Trestman',
      email: 'max@yahoo.com',
      username: 'maxfromstatefarm',
      password: bcrypt.hashSync('max', 10)
    },
    {
      fullName: 'Terrell Tullis',
      email: 'terrell@yahoo.com',
      username: 'terrellfromstatefarm',
      password: bcrypt.hashSync('terrell', 10)
    },
    {
      fullName: 'Ilya Yelizarov',
      email: 'ilya@yahoo.com',
      username: 'ilyafromstatefarm',
      password: bcrypt.hashSync('ilya', 10)
    },
  ];
     for(let i = 0; i < n; i++){
      array.push({
        fullName: faker.name.findName(), 
        email: faker.internet.email(), 
        username: faker.internet.userName(), 
        password: bcrypt.hashSync(faker.name.firstName(), 10), 
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
