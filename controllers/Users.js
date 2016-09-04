'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.rootGET = function rootGET (req, res, next) {
  Users.rootGET(req.swagger.params, res, next);
};

module.exports.usersUser_idGET = function usersUser_idGET (req, res, next) {
  Users.usersUser_idGET(req.swagger.params, res, next);
};

module.exports.usersUser_idPUT = function usersUser_idPUT (req, res, next) {
  Users.usersUser_idPUT(req.swagger.params, res, next);
};
