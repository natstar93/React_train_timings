var React = require('react');

var CallingPoint = React.createClass({
  render : function() {
    return (
      <div className="calling-point clearfix">
        <div className="calling-point-timings">
          <div className="calling-point-scheduled-time">
            {this.props.data.scheduled}
          </div>
          <div className="calling-point-arrival-time">
            {this.props.data.actual}
          </div>
        </div>
        <div className="calling-point-departure">
          <div className="station-name" key={this.props.data.id}>
            {this.props.data.station}
          </div>
          <div className="platform">
            Platform <strong>{this.props.data.platform || '-'}</strong>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = CallingPoint;
