var React = require('react');

var CallingPoint = React.createClass({
  render : function() {
    return (
      <span className="station-name" key={this.props.data.id}>{this.props.data.station}</span>
    )
  }
})

module.exports = CallingPoint;
