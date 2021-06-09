require("dotenv").config();
const formidable = require("express-formidable");
const cors = require("cors");
const express = require("express");

const animals = require("./routs/animals");

//set up express app
const app = express();

//import db-conection
require("./database")

app.use("/", express.static("docs"))

app.use(cors())

//parse http form data
app.use(formidable())

//set up app routs
app.use("/api/v1", animals)

app.listen(process.env.PORT || 4000, function () {
    console.log("now listening for request in port 4000")
});