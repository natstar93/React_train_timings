var React = require('react');

var CallingPoint = React.createClass({
  render : function() {
    var data = this.props.data;
    var actual = data.actual;
    var scheduled = data.scheduled;
    var expected = data.expected;
    var arrival = (scheduled === (actual || expected ) ? null : actual || expected);
    return (
      <div className="calling-point clearfix">
        <div className="calling-point-timings">
          <div className="calling-point-scheduled-time">
            {data.scheduled}
          </div>
          <div className="calling-point-arrival-time">
            {arrival}
          </div>
        </div>
        <div className="calling-point-departure">
          <div className="station-name" key={data.id}>
            {data.station}
          </div>
          <div className='departure-status'>
            On time
          </div>
          <div className="platform">
            Platform <strong>{data.platform || '-'}</strong>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = CallingPoint;
