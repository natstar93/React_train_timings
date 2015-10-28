var React = require('react');
var departureStatus = require('./departure-status');
var classNames = require('classnames');

var CallingPoint = React.createClass({
  render : function() {
    var data = this.props.data;
    var actual = data.actual;
    var scheduled = data.scheduled;
    var expected = data.expected;
    var departure = actual || expected;
    var departureTimeOutput = (scheduled === departure ? null : departure);
    var callingPointDepartureStatus = classNames(this.props.className, {
      'departure-status' : true,
      'late' : scheduled !== expected
    })
    var departureTime = classNames(this.props.className, {
      'calling-point-departure-time' : true,
      'late' : scheduled !== expected
    });
    return (
      <div className="calling-point clearfix">
        <div className="calling-point-timings">
          <div className="calling-point-scheduled-time">
            {data.scheduled}
          </div>
          <div className={departureTime}>
            {departureTimeOutput}
          </div>
        </div>
        <div className="calling-point-departure">
          <div className="station-name" key={data.id}>
            {data.station}
          </div>
          <div className={callingPointDepartureStatus}>
            {departureStatus(scheduled, departure)}
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
