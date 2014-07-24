#!/usr/bin/env node

/**
 * Project: opthub
 * description: optimizely->github
 * 2014-06-01 NOTE:
 *    This code is the result of a Clearhead hackathon -
 *    As such, shipping module > comments at the moment
 */

var request = require('request');
var slug = require('slug');
var fs = require('fs');
var rc = require('rc');
var prompt = require('prompt');
var conf = rc('opthub');

/*jshint loopfunc:true*/
/*jshint curly:false*/
/*jshint expr:true*/

var optimizelyProjectIds = Object.keys(conf).filter(function (k) {
  return k.match(/^\d+$/);
});

var fileCount = 0;
var conditionalWriteFile = function (name, txt) {
  var current;
  try {
    current = fs.readFileSync(name);
  } catch (e) {}
  /*jshint eqeqeq:false*/
  if (current != txt) { // purposeful != b/c ?encoding?
    fileCount++; // console.log(' - writing ' + name);
    fs.writeFile(name, txt);
  }
};

var opthub = function () {
  optimizelyProjectIds.forEach(function (optimizelyProjectId) {
    var url = 'http://cdn.optimizely.com/js/' + optimizelyProjectId + '.js';
    var friendlyUrlName = conf[optimizelyProjectId] || 'opthub-output';
    request(url, function (error, response, body) {
      if (error) console.error('request error on: ' + url);
      if (!error && response.statusCode === 200) {
        fileCount = 0;
        body = body.split('\n');
        var optimizelyString = body.filter(function (l) {
          return l.indexOf('var DATA') !== -1;
        })[0];
        optimizelyString = optimizelyString.replace('var DATA=', '');
        optimizelyString = optimizelyString.substring(0, optimizelyString.length - 1);
        var optimizely = JSON.parse(optimizelyString);
        var projectSlug = slug(friendlyUrlName);
        try {
          fs.mkdirSync(projectSlug);
        } catch (e) {}

        Object.keys(optimizely.experiments).forEach(function (key) {
          var exp = optimizely.experiments[key];
          var folder = projectSlug + '/' + slug(exp.name);
          try {
            fs.mkdirSync(folder);
          } catch (e) {}

          conditionalWriteFile(folder + '/README.md',
            folder + '\n' + new Array(folder.length).join('=') + '\n\n' +
            'https://www.optimizely.com/edit?experiment_id=' + key + '\n\n' +
            '```json\n' + JSON.stringify(exp, true, 2) + '\n```');

          if (exp.code) conditionalWriteFile(folder + '/global.js', exp.code);
          if (exp.css) conditionalWriteFile(folder + '/global.css', exp.css);

          if (exp.variation_ids) exp.variation_ids.forEach(function (variation) {
            var val = optimizely.variations[variation];
            if (val.code)
              conditionalWriteFile(folder + '/' + slug(val.name + '.js').toLowerCase(), val.code);
          });

        });
        console.log('./' + projectSlug + '/: ' + Object.keys(optimizely.experiments).length +
          ' experiments / wrote ' + fileCount + ' files');


      }
    });
  });
};

if (optimizelyProjectIds.length) opthub();
else {
  prompt.start();
  prompt.get({
    properties: {
      optimizelyProjectId: {
        description: 'http://cdn.optimizely.com/js/THIS_NUMBER.js'
      }
    }
  }, function (err, result) {
    optimizelyProjectIds.push(result.optimizelyProjectId.match(/\d+/)[0]);
    opthub();
  });
}