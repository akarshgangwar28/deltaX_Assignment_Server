const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.get("/",(req,res)=>{
    res.send("<h1>Running</h1>")
})

mongoose
  .connect("mongodb://localhost:27017/DeltaXAssignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.listen(8000, () => {
    console.log(`app is running at 8000`);
  });