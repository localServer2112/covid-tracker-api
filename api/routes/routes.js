/** @format */

const express = require("express");
const router = express.Router({ automatic405: true });
const dataModel = require("../models/model");
const testModel = require("../models/tests");
const tags = require("../scripts/script");

// post data to the covid test server
router.post("/cvd:uid", (req, res) => {
  res.status(200).json(tags.getCVDResult(req.body));
});
// post data to the rsl test server
router.post("/rsl:uid", async (req, res) => {
  const user = await dataModel.findOne(req.params);
  const _rsldata = await tags.getRSLResult(req.body);

  res.status(200).json(tags.getRSLResult(req.body));
});

router.get("/id", (req, res) => {
  res.status(200).json(tags.getUID());
});

// get users by registration date
router.get("/user", async (req, res) => {
  try {
    const users = await dataModel.find().sort("-reg_date");
    res.json(users);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

// create new user
router.post("/user", async (req, res) => {
  try {
    // using the model, we create a new user
    const new_user = new dataModel({
      userID: tags.getUID(),
      name: req.body.name,
      phone: req.body.phone,
      year: req.body.year,
      sex: req.body.sex,
      state: req.body.state,
      city: req.body.city,
      streetname: req.body.streetname,
      occupation: req.body.occupation,
      question: req.body.question
    });

    const savedUser = await new_user.save();
    return res.status(200).json(savedUser);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// update the user details
router.put("/user", async (req, res) => {
  const updateUser = dataModel.findOneAndUpdate(
    // the title of the item to find
    { userID: req.body.userID },
    req.body,
    { new: true },

    // the callback function
    (err, user) => {
      // Handle any possible database errors
      if (err) return res.status(500).send(err);
      return res.json(user);
    }
  );
});

module.exports = router;
