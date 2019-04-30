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
    const group = await Groups.getById(req.params.id);

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
// router.get("/test", (req, res) => {
//   res.send("sanity check");
// });

module.exports = router;
