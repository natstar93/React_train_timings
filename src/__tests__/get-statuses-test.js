var React = require('react');
var expect = require('expect');
var mockedData = require('./mocked-data.json');
var getStatuses = require('../components/get-statuses');

describe('gets statuses', function(){
  it('when train midway', function() {
    expect(getStatuses(mockedData.callingPoints)).toEqual(['visited', 'visited', 'visited-midway', 'not-visited', 'not-visited', 'not-visited']);
  });

  it('when train at origin', function() {
    var originData = {"callingPoints": [
      {"station": "Wapping", "scheduled": "10:10", "expected": "10:10", "platform": "1"},
      {"station": "Rotherhithe", "scheduled": "10:13", "expected": "10:14", "platform": "-"}
    ]};
    expect(getStatuses(originData.callingPoints)).toEqual(['not-visited', 'not-visited']);
  });

  it('when train at destination', function() {
    var destinationData = {"callingPoints": [
      {"station": "Wapping", "scheduled": "10:10", "expected": "10:10", "actual": "10:10", "platform": "1"},
      {"station": "Rotherhithe", "scheduled": "10:13", "expected": "10:14", "actual": "10:14", "platform": "-"}
    ]};
    expect(getStatuses(destinationData.callingPoints)).toEqual(['visited', 'visited']);
  });
});
