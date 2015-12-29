'use strict';

var test = require('tape');

test('core tests: querystring', function (t) {
  try {
    require('./core-tests/test-querystring')(t);
  } catch (e) {
    t.fail(e);
  }
  t.end();
})

test('core tests: querystring-multichar-separator', function (t) {
  try {
    require('./core-tests/test-querystring-multichar-separator')(t);
  } catch (e) {
    t.fail(e);
  }
  t.end();
})
