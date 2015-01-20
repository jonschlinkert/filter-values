/*!
 * filter-values <https://github.com/jonschlinkert/filter-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

var mm = require('micromatch');
var forOwn = require('for-own');
var iterator = require('make-iterator');

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
  var res = {};
  var cb = makeIterator(filter, thisArg);

  forOwn(obj, function (val, key, o) {
    if (cb(val, key, o)) {
      res[key] = val;
    }
  });
  return res;
};

function makeIterator(filter, thisArg) {
  if (Array.isArray(filter) || typeof filter === 'string') {
    return function (val) {
      return mm(val, filter).length ? true : false;
    };
  }
  return iterator(filter, thisArg)
}
