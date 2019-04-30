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

router.get('/:id', async (req, res) => {

    try{
        const group = await Groups.findById(req.params.id)
        res.status(200).json(group)
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:id/templates', async (req, res) => {

    try{
        const templates = await Groups.getGroupTemplates(req.params.id)
        res.status(200).json(templates)
    } catch(error){
        res.status(500).json(error)
    }
})

//getBy endpoint to get a group by its groupName
//delete endpoint
//post endpoint
//put/update endpoint

module.exports = router;