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

//getById
//getBy
//delete
//update
//post

module.exports = router;