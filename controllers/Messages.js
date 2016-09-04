'use strict';

var url = require('url');


var Messages = require('./MessagesService');


module.exports.themesTheme_idMessage_idDELETE = function themesTheme_idMessage_idDELETE (req, res, next) {
  Messages.themesTheme_idMessage_idDELETE(req.swagger.params, res, next);
};

module.exports.themesTheme_idMessage_idPUT = function themesTheme_idMessage_idPUT (req, res, next) {
  Messages.themesTheme_idMessage_idPUT(req.swagger.params, res, next);
};

module.exports.themesTheme_idMessage_idRatingPUT = function themesTheme_idMessage_idRatingPUT (req, res, next) {
  Messages.themesTheme_idMessage_idRatingPUT(req.swagger.params, res, next);
};

module.exports.themesTheme_idPOST = function themesTheme_idPOST (req, res, next) {
  Messages.themesTheme_idPOST(req.swagger.params, res, next);
};
