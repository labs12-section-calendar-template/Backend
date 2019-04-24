const router = require('express').Router();
const Users = require('./user-model');

router.get('/', async (req, res) => {

    try{
        const users = await Users.find()
        if(users){
            res.status(200).json(users)
        } else{
            res.status(404).send('the users could not be found')
        }
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})

module.exports = router;