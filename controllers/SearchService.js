'use strict';

exports.themesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * find (String)
  * sectionId (Integer)
  * subsectionId (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "date" : "",
    "messagesCount" : "",
    "title" : "aeiou",
    "author-id" : "",
    "status" : true
  },
  "meta" : {
    "code" : "",
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
  * find (String)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "",
  "meta" : {
    "code" : "",
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

