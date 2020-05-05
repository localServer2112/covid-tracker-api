/** @format */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  year: Date,
  sex: String,
  state: String,
  city: String,
  streetname: String,
  occupation: String,
  question: String
});

module.exports = mongoose.model("user", UserSchema);
