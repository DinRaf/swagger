'use strict';

var url = require('url');


var Search = require('./SearchService');


module.exports.themesGET = function themesGET (req, res, next) {
  Search.themesGET(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  Search.usersGET(req.swagger.params, res, next);
};
