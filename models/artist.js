var mongoose = require("mongoose");

var artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  birth_date: {
    type: Number,
    required: true,
},
birth_month: {
    type: Number,
    required: true,
},
birth_year: {
    type: Number,
    required: true,
},
  bio:{
      type:String ,
      required:true
  }
});
module.exports = mongoose.model("Artist", artistSchema);
