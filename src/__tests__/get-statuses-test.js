var React = require('react');
var expect = require('expect');
var mockedData = require('./mocked-data.json');
var getStatuses = require('../components/get-statuses');

describe('gets statuses', function(){
  it('outputs correct statuses', function() {
    expect(getStatuses(mockedData.callingPoints)).toEqual(['visited', 'visited', 'visited-midway', 'not-visited', 'not-visited', 'not-visited']);
  });
});
