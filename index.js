const express = require('express'); //import express
const app = express(); //execute express
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

require('dotenv/config');


// middleware
// a middleware is a function that runs when you hit a route.
app.use(bodyparser.json());
// use the express-static middleware
app.use(express.static("public"));

const apiRoute = require('./api/routes/routes');

app.use('/api',apiRoute);


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));