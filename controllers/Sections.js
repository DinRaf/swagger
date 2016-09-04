'use strict';

var url = require('url');


var Sections = require('./SectionsService');


module.exports.infoGET = function infoGET (req, res, next) {
  Sections.infoGET(req.swagger.params, res, next);
};

module.exports.section_idSubsectionsGET = function section_idSubsectionsGET (req, res, next) {
  Sections.section_idSubsectionsGET(req.swagger.params, res, next);
};

module.exports.sectionsGET = function sectionsGET (req, res, next) {
  Sections.sectionsGET(req.swagger.params, res, next);
};
