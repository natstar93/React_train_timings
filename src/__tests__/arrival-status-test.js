var React = require('react');
var expect = require('expect');
var arrivalStatus = require('../components/arrival-status');
var calculateMinsLate = require('../components/calculate-mins-late');

describe('arrival status', function() {
  it('returns "On time" if arguments match', function() {
    expect(arrivalStatus('12:34', '12:34')).toEqual('On time');
  });

  it('returns "x min late" if arrival time is later than scheduled', function() {
    expect(arrivalStatus('12:34', '12:39')).toEqual('5 min late');
  });
})
