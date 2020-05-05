const express = require('express');
const router = express.Router({ automatic405: true });
const DATA = require('../models/model');
const tags = require('../scripts/script');

// post data to the covid test server
router.post('/cvd', (req, res) => {  
      res.status(200).json(tags.getCVDResult(req.body));
    });
// post data to the rsl test server
router.post('/rsl', (req, res) => {  
  res.status(200).json(tags.getRSLResult(req.body));
});

router.get('/id', (req,res) => {
  res.status(200).json(tags.getUID());
});
// get users by registration date
router.get('/user',async (req, res)=>{
  try {
      const users = await DATA.find().
      sort('-reg_date');
      res.json(users);
  } catch (error) {
      res.json({
          message : error
      });
  }
});


// create new user
router.post('/user', async (req,res) => {
  // using the model, we create a new user
  const new_user = new DATA({
      userID : tags.getUID,
      details : req.body
  });
  try{
  const savedUser = await new_user.save();
  return res.status(200).json(savedUser);
  }
  catch(err){
      res.json({
          message: err
      });
  }
    });




// update the user details
router.put('/user', async (req,res) => {
  const updateUser = DATA.findOneAndUpdate(
      // the title of the item to find
      {userID : req.body.userID},
      {details : req.body},
      {new: true},
      
      // the callback function
      (err, user) => {
      // Handle any possible database errors
          if (err) return res.status(500).send(err);
          return res.json(user);
      }
  );
});


module.exports =  router; 