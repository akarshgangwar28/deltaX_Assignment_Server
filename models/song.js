var mongoose = require("mongoose");

var songSchema = new mongoose.Schema({
  SongName: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  rel_date: {
    type: Number,
    required: true,
},
rel_month: {
    type: Number,
    required: true,
},
rel_year: {
    type: Number,
    required: true,
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
