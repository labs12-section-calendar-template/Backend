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

router.put('/:id', async (req, res) => {
    try {
      const event = await Events.update(req.params.id, req.body);
  
      if (event) {
        res.status(200).json({ message: 'The event was updated' });
      } else {
        res.status(404).json({ message: 'The event could not be found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating event', error});
    }
  });

router.delete('/:id', async (req, res) => {
    try {
        const id = await Events.remove(req.params.id);
        if (id > 0) {
            res.status(200).json({ message: 'event has been deleted' })
        } else {
            res.status(404).json({ message: 'event not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error removing event', error});
    }
});


module.exports = router;