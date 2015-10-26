var React = require('react');
var JourneyTitle = require('../components/journey-title');
var CallingPointWrapper = require('../components/calling-point-wrapper');
var data = require('../../ldb.json');

var JourneyTable = React.createClass({
  getInitialState: function() {
    return {
      data:data
    }
  },
  render:function() {
    var journeyData = this.state.data;
    return (
      <div>
        <div><JourneyTitle data={journeyData.journey}/></div>
        <div><CallingPointWrapper data={journeyData.callingPoints}/></div>
      </div>
    )
  }
});

module.exports = JourneyTable;
