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
  })
})
