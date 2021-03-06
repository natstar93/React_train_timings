var React = require('react');
var expect = require('expect');
var TestUtils = require('react/lib/ReactTestUtils');
var mockedData = require('./mocked-data.json');
var CallingPointWrapper = require('../components/calling-point-wrapper');

describe('callingPointWrapper', function() {

  it('displays each calling point', function() {
    var wrapperRenderer = TestUtils.createRenderer();
    wrapperRenderer.render(
      <CallingPointWrapper data={mockedData.callingPoints} />
    );
    var wrapper = wrapperRenderer.getRenderOutput();
    expect(wrapper.props.children.length).toEqual(6);
  });

  describe('finds stop position', function() {
    it('correctly outputs first', function() {
      var wrapperRenderer = TestUtils.createRenderer();
      wrapperRenderer.render(
        <CallingPointWrapper data={mockedData.callingPoints} />
      );
      var wrapper = wrapperRenderer.getRenderOutput();
      expect(wrapper.props.children[0].props.position).toEqual('first-visited');
    })
  });
})
