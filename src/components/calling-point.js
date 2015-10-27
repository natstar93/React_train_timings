var React = require('react');

var CallingPoint = React.createClass({
  render : function() {
    return (
      <div className="calling-point clearfix">
        <div className="calling-point-scheduled-time">
          {this.props.data.scheduled}
        </div>
        <div className="station-name" key={this.props.data.id}>
          {this.props.data.station}
        </div>
      </div>
    )
  }
})

module.exports = CallingPoint;
