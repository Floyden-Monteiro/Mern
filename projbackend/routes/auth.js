const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long"),
    check("email").isEmail().withMessage("Email is required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password should be at least 3 char"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is required"),
    check("password")
      .isLength({ min: 1 })
      .withMessage("Password field is required"),
  ],
  signin
);

router.get("/signout", signout);
router.get("/testroute", isSignedIn, (req, res) => {
  res.json(req.auth)
});

module.exports = router;
