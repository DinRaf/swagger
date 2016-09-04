'use strict';

exports.rootGET = function(args, res, next) {
  /**
   * parameters expected in the args:
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

exports.usersUser_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Integer)
  * authToken (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "registrationTime" : "",
    "mail" : "aeiou",
    "nickName" : "aeiou",
    "rating" : "",
    "themesCount" : "",
    "dateOfBirth" : "",
    "isOnline" : true,
    "avatar" : "aeiou",
    "userId" : "",
    "rights" : "aeiou",
    "name" : "aeiou",
    "messagesCount" : "",
    "lastSession" : "",
    "info" : "aeiou"
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

exports.usersUser_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authToken (String)
  * userId (Integer)
  * body (UserUpdateDto)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "registrationTime" : "",
    "mail" : "aeiou",
    "nickName" : "aeiou",
    "rating" : "",
    "themesCount" : "",
    "dateOfBirth" : "",
    "isOnline" : true,
    "avatar" : "aeiou",
    "userId" : "",
    "rights" : "aeiou",
    "name" : "aeiou",
    "messagesCount" : "",
    "lastSession" : "",
    "info" : "aeiou"
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

