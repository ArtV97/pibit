var express = require("express");
var consign = require("consign");

var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({extended: true}));

//console.log(process.cwd()+"/app")

//auto-load
consign({cwd: process.cwd()})
	.include("./app/routes")
	.then("./app/models")
	.then("./app/controllers")
	.then("./config/googleSpreadsheetConnection.js")
	.then("./config/mail.js")
	.into(app);

module.exports = app;