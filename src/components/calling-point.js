var React = require('react');
var arrivalStatus = require('./arrival-status');
var classNames = require('classnames');

var CallingPoint = React.createClass({
  render : function() {
    var data = this.props.data;
    var actual = data.actual;
    var scheduled = data.scheduled;
    var expected = data.expected;
    var arrival = actual || expected;
    var arrivalTimeOutput = (scheduled === arrival ? null : arrival);
    var departureStatus = classNames(this.props.className, {
      'departure-status' : true,
      'late' : scheduled !== expected
    })
    return (
      <div className="calling-point clearfix">
        <div className="calling-point-timings">
          <div className="calling-point-scheduled-time">
            {data.scheduled}
          </div>
          <div className="calling-point-arrival-time">
            {arrivalTimeOutput}
          </div>
        </div>
        <div className="calling-point-departure">
          <div className="station-name" key={data.id}>
            {data.station}
          </div>
          <div className={departureStatus}>
            {arrivalStatus(scheduled, arrival)}
          </div>
          <div className="platform">
            Platform <strong>{data.platform || '-'}</strong>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = CallingPoint;
