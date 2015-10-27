var React = require('react');

var CallingPoint = React.createClass({
  render : function() {
    var data = this.props.data;
    var actual = data.actual;
    var scheduled = data.scheduled;
    var expected = data.expected;
    var arrival = actual || expected;
    var arrivalTimeOutput = (scheduled === arrival ? null : arrival);
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
          <div className='departure-status'>
            {arrivalStatus(scheduled, arrival)}
          </div>
          <div className="platform">
            Platform <strong>{data.platform || '-'}</strong>
          </div>
        </div>
      </div>
    )
  }
})

function arrivalStatus(scheduled, arrival) {
  if(scheduled === arrival) {
    return 'On time';
  }
  else {
    return calculateMinsLate(scheduled, arrival) + ' min late';
  }
}
function calculateMinsLate(scheduled, arrival) {
  var scheduledTimes = scheduled.split(":");
  var arrivalTimes = arrival.split(":");
  var difference = (arrivalTimes[1] - scheduledTimes[1]) + 60 * (arrivalTimes[0] - scheduledTimes[0]);
  return difference;
}

module.exports = CallingPoint;
