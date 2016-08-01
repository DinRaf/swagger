'use strict';

var url = require('url');


var Themes = require('./ThemesService');


module.exports.themesPOST = function themesPOST (req, res, next) {
  Themes.themesPOST(req.swagger.params, res, next);
};

module.exports.themesTheme_idDELETE = function themesTheme_idDELETE (req, res, next) {
  Themes.themesTheme_idDELETE(req.swagger.params, res, next);
};

module.exports.themesTheme_idGET = function themesTheme_idGET (req, res, next) {
  Themes.themesTheme_idGET(req.swagger.params, res, next);
};

module.exports.themesTheme_idPUT = function themesTheme_idPUT (req, res, next) {
  Themes.themesTheme_idPUT(req.swagger.params, res, next);
};
