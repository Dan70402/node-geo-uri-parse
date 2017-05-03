
const assert = require('assert');
const geouri = require('../src/geo-uri-parse').GeoParse;


describe('GeoParse', () => {
  describe('parse()', () => {
    const fn = geouri.parse;
    it('bad parse returns null', () => {
      assert(fn('foobar') === null);
    });

    it('returns a geo object', () => {
      const geo = fn('geo:1,2;u=316.1');
      assert.equal(geo.scheme, 'geo');
      assert.equal(geo.latitude, 1);
      assert.equal(geo.longitude, 2);
      assert.equal(geo.uval, 316.1);
    });

    it('default crs to wsg84', () => {
      const geo = fn('geo:1,2;u=316.1');
      assert.equal(geo.crs, 'wgs84');
    });

    it('altitude default to null', () => {
      const geo = fn('geo:1,2');
      assert.equal(geo.altitude, null);
    });

    it('uval default to null', () => {
      const geo = fn('geo:1,2');
      assert.equal(geo.uval, null);
    });

    it('-0 is allowed', () => {
      const geo = fn('geo:1,-0');
      assert.equal(geo.latitude, 1);
      assert.equal(geo.longitude, -0);
    });

    it('coord a and b required', () => {
      const geo = fn('geo:1');
      assert.equal(geo, null);
    });

    it('fails if lat is greate than 90', () => {
      const geo = fn('geo:91,45');
      assert.equal(geo, null);
    });

    it('fails if lat is less than -90', () => {
      const geo = fn('geo:-91,45');
      assert.equal(geo, null);
    });

    it('fails if lng is greater than 180', () => {
      const geo = fn('geo:90,181');
      assert.equal(geo, null);
    });

    it('fails if lat is less than -180', () => {
      const geo = fn('geo:-90,-181');
      assert.equal(geo, null);
    });

    it('allows altitude with decimal', () => {
      let geo = fn('geo:-90,-180,99.12345');
      assert.equal(geo.altitude, 99.12345);

      geo = fn('geo:-90,-180,-99.12345');
      assert.equal(geo.altitude, -99.12345);
    });

    it('allows lat and long with decimals', () => {
      const geo = fn('geo:45.12345,-45.12345');
      assert.equal(geo.latitude, 45.12345);
      assert.equal(geo.longitude, -45.12345);
    });
  });
});
