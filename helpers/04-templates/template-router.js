const router = require("express").Router();
const Templates = require("./template-model");
const moment = require("moment");


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

router.post("/", async (req, res) => {
  try {
    const template = await Templates.add({
      ...req.body,
      date: moment().format("YYYY-MM-DD")
    });
    if (template) {
      res.status(200).json(template);
    } else {
      res.status(404).send("the template could not be added");
    }
  } catch (error) {
    res.status(500).send(error, "server error");
  }
});

//Gets a template by ID and displays all events for that template
router.get("/:id/events", async (req, res) => {
  try {
    const events = await Templates.getTemplateEvents(req.params.id);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).send("event could not be found");
  }
});

//Gets a template by ID and displays all events for that template
// router.get("/:id/events", async (req, res) => {
//   try {
//     const events = await Templates.getTemplateEvents(req.params.id);
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).send("event could not be found");
//   }
// });



//Edits/Updates template
router.put("/:id", async (req, res) => {
  try {
    const template = await Templates.update(req.params.id, req.body);

    if (template) {
      res.status(200).json({ message: "The template was updated" });
    } else {
      res.status(404).json({ message: "The template could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating template"
    });
  }

});

//Removes a template
router.delete("/:id", async (req, res) => {
  try {
    const id = await Templates.remove(req.params.id);
    if (id > 0) {
      res.status(200).json({ message: "Template has been deleted" });
    } else {
      res.status(404).json({ message: "Template not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error removing template", error });
  }
});

router.post("/:id/events", async (req, res) => {
  try {
    const event = await Templates.addEventsToTemplates({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      repeat: req.body.repeat,
      template_id: req.params.id
    });
    if (event) {
      res.status(200).json(event);
    } else {
      res
        .status(404)
        .send("could not add the event to the template... User Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;
