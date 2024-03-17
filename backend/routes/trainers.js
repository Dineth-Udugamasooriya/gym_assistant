const router = require("express").Router();
let Trainer = require("../models/trainer.model");

router.route("/").get((req, res) => {
  Trainer.find()
    .then((trainers) => res.json(trainers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { username, dob, trainermail, contact, email } = req.body;

  const newTrainer = new Trainer({
    username,
    dob,
    trainermail,
    contact,
    email,
  });

  newTrainer
    .save()
    .then(() => res.json("Trainer added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
