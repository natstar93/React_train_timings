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

  it('grey if already visited', function() {
    var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[0]}/>);
    var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
      callingPoint, 'calling-point'
    );
    expect(callingPointDeparture.className).toContain('visited');
  })

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

  describe('departure time', function() {
    it('actual departure time displayed if train was late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
      var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-departure-time'
      );
      expect(callingPointDeparture.textContent).toEqual('10:14');
    });

    it('not displayed if train was on time', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[0]}/>);
      var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-departure-time'
      );
      expect(callingPointDeparture.textContent).toEqual('');
    });

    it('expected time displayed if train expected late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[2]}/>);
      var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-departure-time'
      );
      expect(callingPointDeparture.textContent).toEqual('10:17');
    });

    it('not displayed if train expected on time', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[3]}/>);
      var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-departure-time'
      );
      expect(callingPointDeparture.textContent).toEqual('');
    });

    it('is red if train expected late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[2]}/>);
      var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-departure-time'
      );
      expect(callingPointDeparture.className).toContain('late');
    });

    it('is grey if train previously visited late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
      var callingPointDeparture = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'calling-point-departure-time'
      );
      expect(callingPointDeparture.className).toNotContain('late');
    });
  });

  describe('departure status', function() {
    it('"On time" if train was on time', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[0]}/>);
      var callingPointStatus = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'departure-status'
      );
      expect(callingPointStatus.textContent).toEqual('On time');
    });

    it('"1 min late" if train was 1 minute late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
      var callingPointStatus = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'departure-status'
      );
      expect(callingPointStatus.textContent).toEqual('1 min late');
    });

    it('is red if train expected late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[2]}/>);
      var callingPointStatus = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'departure-status'
      );
      expect(callingPointStatus.className).toContain('late');
    });

    it('is not red if train expected on time', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[3]}/>);
      var callingPointStatus = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'departure-status'
      );
      expect(callingPointStatus.className).toNotContain('late');
    });

    it('is grey if train previously visited late', function() {
      var callingPoint = TestUtils.renderIntoDocument(<CallingPoint data={mockedData.callingPoints[1]}/>);
      var callingPointStatus = TestUtils.findRenderedDOMComponentWithClass(
        callingPoint, 'departure-status'
      );
      expect(callingPointStatus.className).toNotContain('late');
    });
  });
});
