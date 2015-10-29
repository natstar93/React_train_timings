var React = require('react');
var expect = require('expect');
var findStopPosition = require('../components/find-stop-position');

describe('finds stop position', function(){
  it('correctly outputs first', function() {
    expect(findStopPosition(0,2)).toEqual('first-');
  });

  it('correctly outputs last', function() {
    expect(findStopPosition(2,3)).toEqual('last-');
  });

  it('correctly outputs middle', function() {
    expect(findStopPosition(1,4)).toEqual('');
  });
});
