const router = require("express").Router();
const Templates = require("./template-model");

//Gets all templates
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

//Gets template by ID
router.get("/:id", async (req, res) => {
  try {
    const template = await Templates.findById(req.params.id);

    if (template) {
      res.status(200).json(template);
    } else {
      res
        .status(404)
        .json({ message: "The group with that ID does not exist" });
    }
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
});

//Adds a template
router.post('/', async (req, res) => {

  try{
      const template = await Templates.add(req.body)
      if(template){
          res.status(200).json(template)
      } else{
          res.status(404).send('the template could not be added')
      }
  } catch(error){
      res.status(500).send(error, 'server error')
  }
})

module.exports = router;
