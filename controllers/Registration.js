'use strict';

var url = require('url');


var Registration = require('./RegistrationService');


module.exports.confirmationConfirm_hashGET = function confirmationConfirm_hashGET (req, res, next) {
  Registration.confirmationConfirm_hashGET(req.swagger.params, res, next);
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  Registration.loginPOST(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  Registration.usersPOST(req.swagger.params, res, next);
};
