const express = require("express");
const app = express()
const data = require("./routes/routes.js") //import the routes
app.use('/data', data) //to use the routes
app.use(express.json()) //middleware to parse JSON data


module.exports = app //export the app so it can be used in other files