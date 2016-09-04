'use strict';

exports.themesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * count (Integer)
  * find (String)
  * offset (Integer)
  * sectionUrl (String)
  * subsectionUrl (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "",
  "meta" : {
    "subsection" : "aeiou",
    "code" : "",
    "count" : "",
    "status" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * sort (String)
  * count (Integer)
  * authToken (String)
  * find (String)
  * isOnline (Boolean)
  * offset (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "",
  "meta" : {
    "code" : "",
    "count" : "",
    "status" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

