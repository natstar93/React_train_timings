var React = require('react');

var JourneyTitle = React.createClass({
  render:function() {
    return(
      <div>
        <span className="journey-scheduled">{this.props.data.scheduled}</span>
        <span className="journey-origin">{this.props.data.origin}</span>
      </div>
    )
  }
});

module.exports = JourneyTitle;