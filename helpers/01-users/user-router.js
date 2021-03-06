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

router.post('/:id/groups', async (req, res) => {
    const { joinCode, name } = req.body;

    // This makes sure that the joincode and name length are the proper lengthhh
    if(joinCode.length < 2 || name.length < 3 ){
        return res.status(404).send('your joinCode or name length is too short')
    }  else {
        const users = await Users.findById(req.params.id)
        const groups = await Users.getUserGroups(req.params.id)
        if(!users.premiumStatus && groups.length >= 1){
            res.status(404).send('You need premium status to create more than one group')
        } else if (users.premiumStatus && groups.length === 5){
            res.status(404).send('You already have the maximum number of groups created')
        } else 
            {
            console.log(groups.length)
            console.log(users.premiumStatus)
            try {
                const group = await Users.addGroupToUser({
                joinCode: Number(req.body.joinCode),
                name: req.body.name,
                user_id: req.params.id 
                });
            if(group){
                res.status(200).json(group)
            } else {
                res.status(404).send('could not add the group to the user... User Error')
            } } catch(error){
                res.status(500).json(error)
            }
        }
    }
})

router.post('/', async (req, res) => {

    try{
        const users = await Users.add(req.body)
        if(users){
            res.status(200).json(users)
        } else{
            res.status(404).send('the users could not be added')
        }
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = await Users.remove(req.params.id);
        if (id > 0) {
            res.status(200).json({ message: 'User has been deleted' })
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing user', error});
    }
});

module.exports = router;