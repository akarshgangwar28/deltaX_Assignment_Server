var mongoose = require("mongoose");

var artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  dob: {
    type: Date,
    required: true,
  },
  bio:{
      type:String ,
      required:true
  }
});
module.exports = mongoose.model("Artist", artistSchema);
