var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var JourneyTable = require('../components/journey-table');
var mockedData = require('./mocked-data.json');

describe('Journey table', function() {
  it('exists', function() {
    var journeyComponent = TestUtils.renderIntoDocument(<JourneyTable data={mockedData}/>);
    expect(journeyComponent).toExist();
  });
})
