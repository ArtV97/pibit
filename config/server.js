var express = require("express");
var consign = require("consign");

var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({extended: true}));

//auto-load
consign()
	.include(process.cwd() + "/app/routes")
	.then(process.cwd() + "/app/models")
	.then(process.cwd() + "/app/controllers")
	.then(process.cwd() + "/config/googleSpreadsheetConnection.js")
	.into(app);

module.exports = app;