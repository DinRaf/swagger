'use strict';

exports.themesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (PostThemeDto)
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

exports.themesTheme_idDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * themeId (Integer)
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

exports.themesTheme_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * themeId (Integer)
  * count (Integer)
  * offset (Integer)
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

exports.themesTheme_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offset (Integer)
  * count (Integer)
  * themeId (Integer)
  * title (String)
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

