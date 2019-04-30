const router = require('express').Router();
const Events = require('./event-model');

router.get('/', async (req, res) => {

    try{
        const events = await Events.find()
        if(events){
            res.status(200).json(events)
        } else{
            res.status(404).send('the events could not be found')
        }
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})

router.get('/:id', async (req,res) => {

    try{
        const events = await Events.findById(req.params.id)
        res.status(200).json(events)
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})

router.post('/', async (req, res) => {

    try{
        const events = await Events.add(req.body)
        if(events){
            res.status(200).json(events)
        } else{
            res.status(404).send('the events could not be added')
        }
    } catch(error){
        res.status(500).send(error, 'server error')
    }
})


module.exports = router;