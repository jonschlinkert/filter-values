/*!
 * filter-values <https://github.com/jonschlinkert/filter-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

var forOwn = require('for-own');
var iterator = require('make-iterator');

module.exports = function filterValues(obj, cb, thisArg) {
  cb = iterator(cb, thisArg);
  var res = {};

  forOwn(obj, function (val, key, o) {
    if (cb(val, key, o)) {
      res[key] = val;
    }
  });
  return res;
};
