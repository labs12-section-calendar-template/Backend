const router = require("express").Router();
const Members = require("./members-model");

router.get("/", async (req, res) => {
    try {
      const members = await Members.find();
      if (members) {
        res.status(200).json(members);
      } else {
        res.status(404).send("the members could not be found");
      }
    } catch (error) {
      res.status(500).send(error, "server error");
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
        const id = await Members.remove(req.params.id);
        if (id > 0) {
            res.status(200).json({ message: 'member has been deleted' })
        } else {
            res.status(404).json({ message: 'member not found' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing group', error});
    }
  });

  router.get('/:id/groups', async (req, res) => {
    try {
      member = await Members.getMembersGroups(req.params.id)
      res.status(200).json(member)
    } catch(error){
      res.status(500).json(error)
    }
  })

module.exports = router;