const router = require('express').Router();
const Groups = require('./group-model');

router.get('/', async (req, res) => {

    try{
        const groups = await Groups.find()
        if(groups){
            res.status(200).json(groups)
        } else{
            res.status(404).send('the groups could not be found')
        }
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})

module.exports = router;