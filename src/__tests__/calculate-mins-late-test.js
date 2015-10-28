var React = require('react');
var expect = require('expect');
var calculateMinsLate = require('../components/calculate-mins-late');

describe('calculating lateness', function(){
  it('correctly calculates minutes', function() {
    expect(calculateMinsLate('10:59', '11:08')).toEqual(9);
  });

  it('correctly calculates minutes when over an hour late', function() {
    expect(calculateMinsLate('10:59', '12:10')).toEqual(71);
  });
});
