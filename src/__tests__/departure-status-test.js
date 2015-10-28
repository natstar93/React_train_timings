var React = require('react');
var expect = require('expect');
var departureStatus = require('../components/departure-status');
var calculateMinsLate = require('../components/calculate-mins-late');

describe('departure status', function() {
  it('returns "On time" if arguments match', function() {
    expect(departureStatus('12:34', '12:34')).toEqual('On time');
  });

  it('returns "x min late" if departure time is later than scheduled', function() {
    expect(departureStatus('12:34', '12:39')).toEqual('5 min late');
  });
})
