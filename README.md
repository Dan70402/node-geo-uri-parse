[![Build Status](https://travis-ci.org/Dan70402/node-geo-uri-parse.svg?branch=master)](https://travis-ci.org/Dan70402/node-geo-uri-parse)

# geo-uri-parse
* a simple parse of a geo uri based on [RFC-5870](https://tools.ietf.org/html/rfc5870)

## What is does:
- returns a geo uri breakdown object
- validates allowed latitude, longitude, altitude

## TODO:
- if match result not equivalent to original options error or try to coerce
- crs and u must not appear more than once
- crs and u must be given before any other params
- crs must be first if crs and u are used
- addresses that a,b,c and uval and crs *may* be percent encoded
