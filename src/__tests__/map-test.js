var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var Map = require('../components/map');
var mockedData = require('./mocked-data.json');

describe('map', function() {
  it('shows a green stop if station visited', function() {
    var map = TestUtils.renderIntoDocument(<Map data={mockedData.callingPoints[0].actual}/>);
    var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
      map, 'img'
    );
    expect(callingPointImage.src).toContain('src/images/green.png');
  });

  it('shows a blue stop if station not visited', function() {
    var map = TestUtils.renderIntoDocument(<Map data={mockedData.callingPoints[2].actual}/>);
    var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
      map, 'img'
    );
    expect(callingPointImage.src).toContain('src/images/blue.png');
  });
})
