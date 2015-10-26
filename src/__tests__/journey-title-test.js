var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var JourneyTitle = require('../components/journey-title');
var mockedData = require('./mocked-data.json');

describe('Journey title', function() {
  it('displays departure time', function() {
    var journeyTitle = TestUtils.renderIntoDocument(<JourneyTitle data={mockedData.journey}/>);
    var span = TestUtils.findRenderedDOMComponentWithTag(
      journeyTitle, 'span'
    );
    expect(span.textContent).toEqual('10:00');
  })
})
