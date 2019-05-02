const router = require("express").Router();
const Groups = require("./group-model");

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

module.exports = router;
