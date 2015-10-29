var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var Map = require('../components/map');
var mockedData = require('./mocked-data.json');

describe('map', function() {
  describe('first stop', function() {
    it('shows a green end point stop if station visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[0].actual} position={0} />);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/first-departed.png');
    });
  });

  describe('midway stop', function() {
    it('shows a green stop if station visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[1].actual} position={1} />);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/departed.png');
    });

    it('shows a blue stop if station not visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[2].actual} position={2}/>);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/blue.png');
    });
  });
})
