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

router.get('/:id/templates', async (req, res) =>{
    try{
        const templates = await Groups.getGroupTemplates(req.params.id)
        res.status(200).json(templates)
    } catch(error){
        res.status(500).send('Templates could not be found')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = await Users.remove(req.params.id);
        if (id > 0) {
            res.status(200).json({ message: 'Group has been deleted' })
        } else {
            res.status(404).json({ message: 'Group not found' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing group', error});
    }
});

module.exports = router;