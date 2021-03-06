"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

/* eslint-disable no-console */
var server = new _app["default"]().app;
server.listen(process.env.PORT, function () {
  return console.log("App running on PORT ".concat(process.env.PORT));
});