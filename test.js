/*!
 * filter-values <https://github.com/jonschlinkert/filter-values>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var filter = require('./');

describe('.filter()', function () {
  it('should return values for which the callback returns true.', function () {
    var o = filter({a: 'a', b: 'b', c: 'c'}, function (value) {
      return value === 'b';
    });
    o.should.eql({ b: 'b' });

    o = filter({a: 'a', b: 'b', c: 'c'}, function (value, key) {
      return key === 'b';
    });
    o.should.eql({ b: 'b' });

    o = filter({a: 'a', b: 'b', c: 'c'}, function (value, key, obj) {
      return obj[key] === 'b';
    });
    o.should.eql({ b: 'b' });
  });

  it('should omit values for which the callback returns false.', function () {
    var o = filter({a: 'a', b: 'b', c: 'c'}, function (value) {
      return value !== 'b';
    });
    o.should.eql({a: 'a', c: 'c'});
  });

  it('should return an empty object if all values return false.', function () {
    var o = filter({a: 'a', b: 'b', c: 'c'}, function (value) {
      return value === 'foo';
    });
    o.should.eql({});
  });

  it('should work with `micromatch` glob patterns', function () {
    var o = filter({a: 'a', b: 'bbd', c: 'bca2'}, ['b*', '!bc*']);
    o.should.eql({b: 'bbd'});

    var o = filter({a: 'a', b: 'bbd', c: 'bca2'}, '!b*');
    o.should.eql({a: 'a'})
  });
});
