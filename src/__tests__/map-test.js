var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var Map = require('../components/map');
var mockedData = require('./mocked-data.json');

describe('map', function() {

  it('displays correct image', function() {
    var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[0].actual} position={'first-visited'} />);
    var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
      map, 'img'
    );
    expect(callingPointImage.src).toContain('src/images/first-visited.png');
  });
});
