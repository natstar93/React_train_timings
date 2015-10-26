var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var JourneyTitle = require('../components/journey-title');
var mockedData = require('./mocked-data.json');

describe('Journey title', function() {
  it('displays departure time', function() {
    var journeyTitle = TestUtils.renderIntoDocument(<JourneyTitle data={mockedData.journey}/>);
    var journeyScheduled = TestUtils.findRenderedDOMComponentWithClass(
      journeyTitle, 'journey-scheduled'
    );
    expect(journeyScheduled.textContent).toEqual('10:00');
  });

  it('displays origin station', function() {
    var journeyTitle = TestUtils.renderIntoDocument(<JourneyTitle data={mockedData.journey}/>);
    var journeyOrigin = TestUtils.findRenderedDOMComponentWithClass(
      journeyTitle, 'journey-origin'
    );
    expect(journeyOrigin.textContent).toEqual('Shoreditch High Street');
  });

  it('displays destination station', function() {
    var journeyTitle = TestUtils.renderIntoDocument(<JourneyTitle data={mockedData.journey}/>);
    var journeyDestination = TestUtils.findRenderedDOMComponentWithClass(
      journeyTitle, 'journey-destination'
    );
    expect(journeyDestination.textContent).toEqual('Canada Water');
  });

})
