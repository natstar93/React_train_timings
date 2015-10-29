var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var Map = require('../components/map');
var mockedData = require('./mocked-data.json');

describe('map', function() {
  describe('first stop', function() {
    it('shows a green end point stop if station visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[0].actual} position={'first-visited'} />);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/first-visited.png');
    });
  });

  describe('midway stop', function() {
    it('shows a green stop if station visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[1].actual} position={'visited'} />);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/visited.png');
    });

    it('shows a blue stop if station not visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[3].actual} position={'not-visited'}/>);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/not-visited.png');
    });

    it('shows green stop and train if train is between stations', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[2].actual} position={'visited-midway'}/>);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/visited-midway.png');
    });
  });

  describe('last stop', function() {
    it('shows a blue stop if station not visited', function() {
      var map = TestUtils.renderIntoDocument(<Map actual={mockedData.callingPoints[5].actual} position={'last-not-visited'}/>);
      var callingPointImage = TestUtils.findRenderedDOMComponentWithTag(
        map, 'img'
      );
      expect(callingPointImage.src).toContain('src/images/last-not-visited.png');
    });
  });
})
