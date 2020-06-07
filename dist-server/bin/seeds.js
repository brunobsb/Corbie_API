"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

var _Users = _interopRequireDefault(require("../models/Users"));

var _Projects = _interopRequireDefault(require("../models/Projects"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var tasksList = [{
  title: "task teste",
  description: "primeira task teste",
  duration: 8,
  cost: 0,
  status: "OnGoing",
  type: "Planning",
  profitable: true,
  dueDate: new Date()
}];
var usersList = [{
  name: "ingrid pitta",
  username: "ingridpitta",
  password: "12345",
  role: "project manager",
  email: "ingridpitta@email.com"
}];
var projectsList = [{
  title: "primeiro projeto",
  description: "projeto teste",
  hourPrice: 60,
  duration: 120,
  cost: 0,
  status: "ONGOING",
  dueDate: new Date()
}];

_mongoose["default"].connect("mongodb://localhost/corbie", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // eslint-disable-next-line no-console
.then(function () {
  return console.log("Connected to database!");
});

_Users["default"].insertMany(usersList).then(function () {
  console.log("Users inserted");

  _mongoose["default"].connection.close();
});