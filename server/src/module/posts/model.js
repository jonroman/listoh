var mongoose = require("mongoose")
var Schema = mongoose.Schema

var PostSchema = new Schema({
  title: String,
  description: String,
  deleted: {
    type: Boolean,
    default: false
  }
})

var Post = mongoose.model("posts", PostSchema)

module.exports = Post
