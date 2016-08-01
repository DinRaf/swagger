'use strict';

exports.themesTheme_idMessage_idDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * themeId (Integer)
  * messageId (Integer)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.themesTheme_idMessage_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * themeId (Integer)
  * messageId (Integer)
  * message (String)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "date" : "",
    "messages" : "",
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

exports.themesTheme_idPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * themeId (Integer)
  * message (String)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "date" : "",
    "messages" : "",
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

