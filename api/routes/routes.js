const express = require('express');
const router = express.Router({ automatic405: true });
const DB = require('../models/model');
const getTestResults = require('../scripts/script');

// post data to the server
router.post('/', (req, res) => {  
      res.status(200).json(getTestResults(req.body));
    });

// get 
module.exports =  router; 