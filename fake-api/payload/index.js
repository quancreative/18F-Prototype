var results = require('./results').sources
  fs = require('fs');

var payload = {};

payload.getPayload = function (reqUrl, callback) {
  var jsonData = null;
  for (var idx in results) {
    if (results[idx].key === reqUrl) {
      var rawData = fs.readFileSync(results[idx].value);
      jsonData =  JSON.parse(rawData);
    }
  }
  callback(jsonData);
};

payload.endpoints = function(){
  var endpoints = [];

  for (var idx in results) {
    endpoints.push(results[idx].key);
  }

  return endpoints;
};

module.exports = payload;