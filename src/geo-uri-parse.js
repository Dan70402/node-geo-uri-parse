'strict';

class GeoParse {
  static parse(uri) {
    const re = /^(geo):(-?[0-9]*\.?[0-9]+),(-?[0-9]*\.?[0-9]+)(,(-?[0-9]*\.?[0-9]+))?(;crs=([^;]*))?(;u=([0-9]*\.?[0-9]+))?/; // eslint-disable-line max-len
    const match = uri.match(re);

    if (!match) {
      return null;
    }

    const parsedGeo = {
      scheme: match[1],
      latitude: match[2],
      longitude: match[3],
      altitude: match[5] || null,
      crs: match[7] || 'wgs84',
      uval: match[9] || null
    };

    if (parsedGeo.latitude < -90 || parsedGeo.latitude > 90) {
      return null;
    }

    if (parsedGeo.longitude < -180 || parsedGeo.longitude > 180) {
      return null;
    }

    return parsedGeo;
  }

}

module.exports = {
  GeoParse
};
