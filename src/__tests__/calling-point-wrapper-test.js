var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var mockedData = require('./mocked-data.json');
var CallingPointWrapper = require('../components/calling-point-wrapper');

describe('callingPointWrapper', function() {

  it('loads calling point data', function() {
    var callingPoints = TestUtils.renderIntoDocument(<CallingPointWrapper data={mockedData.callingPoints} />);
    expect(callingPoints.props.data.length).toEqual(2);
  });

  it('displays each calling point', function() {
    var callingPoints = TestUtils.renderIntoDocument(<CallingPointWrapper data={mockedData.callingPoints} />);
    var wrappers = TestUtils.scryRenderedDOMComponentsWithClass(callingPoints, 'calling-point');
    expect(wrappers.length).toEqual(2);
  });
})
