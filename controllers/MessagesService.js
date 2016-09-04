'use strict';

exports.themesTheme_idMessage_idDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
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
  * offset (Integer)
  * count (Integer)
  * messageId (Integer)
  * message (CreateMessageDto)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "date" : "",
    "themeId" : "",
    "messages" : "",
    "messagesCount" : "",
    "title" : "aeiou",
    "authorId" : "",
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

exports.themesTheme_idMessage_idRatingPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authToken (String)
  * messageId (Integer)
  * grade (Boolean)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "",
  "status" : "aeiou"
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
  * count (Integer)
  * message (CreateMessageDto)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "date" : "",
    "themeId" : "",
    "messages" : "",
    "messagesCount" : "",
    "title" : "aeiou",
    "authorId" : "",
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

