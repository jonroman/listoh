var mongoose = require("mongoose")
var Schema = mongoose.Schema

var UserSchema = new Schema({
  objectSid: {
    type: String,
    unique: true,
    required: true
  },
  fname: String,
  lname: String,
  fullname: {
    type: String,
    unique: true,
    required: true
  },
  country: String,
  location: String,
  title: String,
  department: String,
  picture: String,
  dob: Date,
  company: String,
  businesslocation: String,
  businessmailnickname: String,
  businessphone: String,
  businesscell: String,
  businessaddress: String,
  businessemail: {
    type: String,
    unique: true,
    required: true
  },
  personalhomephone: String,
  personalcellphone: String,
  personalhomeaddress: String,
  personalhomezip: String,
  exposepersonaldata: {
    type: Boolean,
    default: false
  },
  deleted: {
    type: Boolean,
    default: false
  },

})

var User = mongoose.model("users", UserSchema)

module.exports = User
