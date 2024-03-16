const router = require("express").Router();
let Employee = require("../models/employee.model");

// Route to handle user registration
router.route("/").post((req, res) => {
  const { username, email, password } = req.body;

  // Check if the email already exists
  Employee.findOne({ email: email })
    .then((user) => {
      if (user) {
        // If the user already exists, return a message
        res.json({ success: false, message: "Email already exists" });
      } else {
        // Create a new user
        const newUser = new Employee({
          username,
          email,
          password,
        });

        // Save the new user to the database
        newUser
          .save()
          .then(() => {
            res.json({
              success: true,
              message: "User registered successfully",
            });
          })
          .catch((err) =>
            res.status(400).json({ success: false, message: "Error: " + err })
          );
      }
    })
    .catch((err) =>
      res.status(400).json({ success: false, message: "Error: " + err })
    );
});

module.exports = router;
