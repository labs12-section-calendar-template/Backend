const router = require("express").Router();
const Groups = require("./group-model");
const moment = require('moment');


//comment
router.get("/", async (req, res) => {
  try {
    const groups = await Groups.find();
    if (groups) {
      res.status(200).json(groups);
    } else {
      res.status(404).send("the groups could not be found");
    }
  } catch (error) {
    res.status(500).send(error, "server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const group = await Groups.findById(req.params.id);

    if (group) {
      res.status(200).json(group);
    } else {
      res
        .status(404)
        .json({ message: "The group with that ID does not exist" });
    }
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
});


//This endpoint should never be used
router.post("/", (req, res) => {
  let group = req.body;

  if (!group.joinCode || !group.name || !group.user_id) {
    res.status(404).json({ message: "Please provide your group's details" });
  } else {
    Groups.add(group)
      .then(newGroup => {
        res.status(201).json(newGroup);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: "server error" });
      });
  }
});

router.put("/:id", async (req, res) => {

  if(req.body.name < 3){
    return res.status(404).send('Name length is required to be longer')
  }

  try {
    const group = await Groups.update(req.params.id, req.body);

    if (group) {
      res.status(200).json({ message: "The group was updated" });
    } else {
      res.status(404).json({ message: "The group could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating group"
    });
  }
});

router.get('/:id/templates', async (req, res) =>{
  try{
      const templates = await Groups.getGroupTemplates(req.params.id)
      res.status(200).json(templates)
  } catch(error){
      res.status(500).send('Templates could not be found')
  }
})

router.get('/:id/members', async (req, res) => {
  try{
    const members = await Groups.getGroupMembers(req.params.id)
    res.status(200).json(members)
  } catch(error){
    res.status(500).send('members could not be found')
  }
})

router.delete('/:id', async (req, res) => {
  try {
      const id = await Groups.remove(req.params.id);
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

router.post('/:id/templates', async (req, res) => {
  let { title, description } = req.body
  
  if( title.length < 3 || description.length < 10){
    return res.status(404).send('The length of your title or description is too short')
  }
  
  try {
      const templates = await Groups.addTemplateToGroup({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        date: moment().format("YYYY-MM-DD"),
        color: req.body.color,
        group_id: req.params.id
  })
  if(templates){
      res.status(200).json(templates)
  } else {
      res.status(404).send('could not add the template to the group... User Error')
  } } catch(error){
      res.status(500).json(error)
  }
})

router.post('/getby/:user_id', async (req, res) => {

      try{
         group = await Groups.getBy({ joinCode: req.body.joinCode });
         
         if(group){
           try{
             member = await Groups.addMember({ user_id: req.params.user_id, group_id: group.id })
             res.status(200).json({ member, message: "member is now in existence" })
           } catch(error){
             console.log(error)
             res.status(500).json({ message: "error 1 adding user error", error })
           }
         } else {
           res.status(404).send('This is not the group you are looking for')
         }
  
      } catch(error){
          console.log(error)
          res.status(500).json({ message: "error 2 getting group error", error })
      }
  })



module.exports = router;
