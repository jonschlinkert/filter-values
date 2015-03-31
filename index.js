/*!
 * filter-values <https://github.com/jonschlinkert/filter-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var forOwn = require('for-own');
var iterator = require('make-iterator');
var mm = require('micromatch');

/**
 * Filter an object values using glob patterns
 * or with a `callback` function returns true.
 *
 * @param  {Object} `obj`
 * @param  {Function|Array|String} `filter`
 * @param  {Object} `thisArg`
 * @return {Object}
 */

module.exports = function filterValues(obj, filter, thisArg) {
  var cb = matcher(filter, thisArg);
  var res = {};
  forOwn(obj, function (val, key, o) {
    if (cb(val, key, o)) {
      res[key] = val;
    }
  });
  return res;
};

function matcher(filter, thisArg) {
  if (Array.isArray(filter) || typeof filter === 'string') {
    return function (val) {
      return !!mm(val, filter).length;
    };
  }
  return iterator(filter, thisArg)
}
