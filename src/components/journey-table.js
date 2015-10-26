var React = require('react');
var JourneyTitle = require('../components/journey-title');
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
      <div><JourneyTitle data={journeyData.journey}/></div>
    )
  }
});

module.exports = JourneyTable;
