const router = require("express").Router();
let Employee = require("../models/employee.model");

router.route("/").post((req, res) => {
  const { email, password } = req.body;
  Employee.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          // If login is successful, send the user's email in the response
          res.json({ success: true, email: user.email });
        } else {
          res.json({ success: false, message: "The password is incorrect" });
        }
      } else {
        res.json({ success: false, message: "No record existed" });
      }
    })
    .catch((err) =>
      res.status(400).json({ success: false, message: "Error: " + err })
    );
});

module.exports = router;
