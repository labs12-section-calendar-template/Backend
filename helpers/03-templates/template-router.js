const router = require("express").Router();
const Templates = require("./template-model");

router.get("/", async (req, res) => {
  try {
    const templates = await Templates.find();
    if (templates) {
      res.status(200).json(templates);
    } else {
      res.status(404).send("the templates could not be found");
    }
  } catch (error) {
    res.status(500).send(error, "server error");
  }
});

module.exports = router;
