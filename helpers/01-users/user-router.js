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

router.get('/:id', async (req,res) => {

    try{
        const users = await Users.findById(req.params.id)
        res.status(200).json(users)
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})

router.get('/:id/groups', async (req, res) =>{
    
    try{
        const groups = await Users.getUserGroups(req.params.id)
        res.status(200).json(groups)
    } catch(error){
        res.status(500).send('User could not be found')
    }
})

module.exports = router;