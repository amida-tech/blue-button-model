"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/allergies');

describe('expanded schema access', function () {
  var list = bbm.schemas.list(true);
  var map = bbm.schemas.map(true);

  describe('list vs map sanity check', function () {
    list.forEach(function (element) {
      var id = element.id;
      it(id, function () {
        expect(map[id]).toEqual(expect.objectContaining({
          'id': expect.any(String)
        }));
        expect(element).toEqual(map[id]);
      });
    });
  });
});

describe('schema access', function () {
  var list = bbm.schemas.list();
  var map = bbm.schemas.map();

  describe('list vs map sanity check', function () {
    list.forEach(function (element) {
      var id = element.id;
      if (element.id) {
        it(id, function () {
          expect(map[id]).toEqual(expect.objectContaining({
            'id': expect.any(String)
          }));
          expect(element).toEqual(map[id]);
        });
      }
    });
  });
});
