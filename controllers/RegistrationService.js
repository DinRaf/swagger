'use strict';

exports.loginPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * password (String)
  * nickName (String)
  * mail (String)
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

exports.usersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (PostUserDto)
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

