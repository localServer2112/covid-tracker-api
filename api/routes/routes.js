const express = require('express');
const router = express.Router({ automatic405: true });
const DB = require('../models/model');
const tags = require('../scripts/script');

// post data to the covid test server
router.post('/cvd', (req, res) => {  
      res.status(200).json(tags.getCVDResult(req.body));
    });
// post data to the rsl test server
router.post('/rsl', (req, res) => {  
  res.status(200).json(tags.getRSLResult(req.body));
});
// post data to the userDetails server
router.post('/user', (req, res) => {  
      res.status(200).json(tags.setUserDetails(req.body,1));
    });
// get 
module.exports =  router; 