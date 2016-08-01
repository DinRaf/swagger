'use strict';

var url = require('url');


var Sections = require('./SectionsService');


module.exports.aboutGET = function aboutGET (req, res, next) {
  Sections.aboutGET(req.swagger.params, res, next);
};

module.exports.section_idSubsectionsGET = function section_idSubsectionsGET (req, res, next) {
  Sections.section_idSubsectionsGET(req.swagger.params, res, next);
};

module.exports.sectionsGET = function sectionsGET (req, res, next) {
  Sections.sectionsGET(req.swagger.params, res, next);
};
