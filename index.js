/** @format */

const express = require("express"); //import express
const app = express(); //execute express
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

require("dotenv/config");

// middleware
// a middleware is a function that runs when you hit a route.
app.use(bodyparser.json());
// use the express-static middleware
app.use(express.static("public"));

const apiRoute = require("./api/routes/routes");

app.use("/api", apiRoute);

// mongoose.connect(process.env.DB_CONNECTION,
//     { useNewUrlParser: true, useUnifiedTopology: true  },
//     ()=>{
//         console.log("Connected to DB");
//     }
// );

// Connect to Database, this way you can see any error
const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Call connectDB
connectDB();

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
