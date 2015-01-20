# filter-values [![NPM version](https://badge.fury.io/js/filter-values.svg)](http://badge.fury.io/js/filter-values)

> Filter an object to have only the `own` properties for which a `callback` function returns true. 

## Install with [npm](npmjs.org)

```bash
npm i filter-values --save
```

## Usage

```js
var filter = require('filter-values');

filter({a: 'a', b: 'b', c: 'c'}, function(value, key, obj) {
  return key !== 'b';
});
//=> {a: 'a', c: 'c'}


filter({a: 'a', b: 'b', c: 'c'}, function(value, key, obj) {
  return key === 'b';
});
//=> {b: 'b'}

filter({a: 'a', b: 'b', c: 'c'}, function(value, key, obj) {
  return value === 'b';
});
//=> {b: 'b'}
```

## Run tests

Install dev dependencies:

```bash
node i -d && mocha
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/filter-values/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 19, 2015._
