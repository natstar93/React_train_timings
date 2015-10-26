var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var JourneyTable = require('../components/journey-table');

describe('Journey table', function() {
  it('exists', function() {
    var journeyComponent = TestUtils.renderIntoDocument(<JourneyTable/>);
    expect(journeyComponent).toExist();
  });
})
