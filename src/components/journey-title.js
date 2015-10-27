var React = require('react');

var JourneyTitle = React.createClass({
  render:function() {
    return(
      <div className="journey-title">
        <span className="journey-scheduled">{this.props.data.scheduled}</span>&nbsp;
        <span className="journey-origin">{this.props.data.origin}</span>
        &nbsp;to&nbsp;
        <span className="journey-destination">{this.props.data.destination}</span>
      </div>
    )
  }
});

module.exports = JourneyTitle;
