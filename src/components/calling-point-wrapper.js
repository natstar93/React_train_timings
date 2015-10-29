var React = require('react');
var CallingPoint = require('./calling-point');
var findStopPosition = require('./find-stop-position');
var getStatuses = require('./get-statuses');

var CallingPointWrapper = React.createClass({
  render : function(){
    var callingPointsData = this.props.data;
    var statuses = getStatuses(callingPointsData);
    return (
      <div className="calling-point-wrapper">
        {callingPointsData.map(function(result, index) {
          var position = findStopPosition(index, (callingPointsData.length));
          var status = statuses[index];
          return <CallingPoint key={index} data={result} position={position + status}/>
        })}
      </div>
    )
  }
});

module.exports = CallingPointWrapper;
