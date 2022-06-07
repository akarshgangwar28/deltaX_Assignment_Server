var mongoose = require("mongoose");

var songSchema = new mongoose.Schema({
  SongName: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  release:{
    type:Date,
    required:true
  },
  artist: {
    type: Array,
    default: []
  },
  thumbnail:{
    data: Buffer,
    contentType: String,
  },
});
module.exports = mongoose.model("Song", songSchema);
