Terrell
# Backend

***endpoints for AUTH table***

    - /auth/register - register a user using a .POST
        ## data requirement example ##
        {
        "fullname": "Bob Man",
        "email": "bob@yahoo.com",
        "username": "bobber",
        "password": "bob",
        }

    - /auth/login - login with a user using a .POST
        "username": "bobber",
        "password": "bob"

        *** passwords for seed users ***
            jakefromstatefarm = jake
            maxfromstatefarm = max
            terrellfromstatefarm = terrell
            ilyafromstatefarm = ilya


    - /auth/checkauth - use this endpoint with a .POST to allow for data persistence on page refresh

***endpoints for USERS table***

    - /users  - get an array of user objects using a .GET

    - /users/:id - get a user b their id
    
    - /users/:user_id/groups - gets the groups belonging to a user by user_id using a .GET
