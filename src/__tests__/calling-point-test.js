var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var CallingPoint = require('../components/calling-point');
var mockedData = require('./mocked-data.json');

describe('calling point', function() {
  it('displays station name', function() {
    var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
    var stationName = TestUtils.findRenderedDOMComponentWithClass(
      callingPoint, 'station-name'
    );
    expect(stationName.textContent).toEqual('Rotherhithe');
  });

  it('displays scheduled departure time', function() {
    var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[0]}/>);
    var callingPointTime = TestUtils.findRenderedDOMComponentWithClass(
      callingPoint, 'calling-point-scheduled-time'
    );
    expect(callingPointTime.textContent).toEqual('10:10');
  });

  describe('displays platform', function() {
    it('number', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[0]}/>);
      var callingPointPlatform = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'platform'
      );
      expect(callingPointPlatform.textContent).toEqual('Platform 1');
    });

    it('as a \'-\' if platform number is blank', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
      var callingPointPlatform = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'platform'
      );
      expect(callingPointPlatform.textContent).toEqual('Platform -');
    });
  });

  describe('arrival time', function() {
    it('actual arrival time displayed if train was late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
      var callingPointArrival = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-arrival-time'
      );
      expect(callingPointArrival.textContent).toEqual('10:14');
    });
  });
});
