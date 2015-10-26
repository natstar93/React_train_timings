var React = require('react');

var JourneyTitle = React.createClass({
  render:function() {
    return(<span>{this.props.data.scheduled}</span>)
  }
});

module.exports = JourneyTitle;
