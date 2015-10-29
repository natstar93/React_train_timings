var React = require('react');
var CallingPoint = require('./calling-point');
var findStopPosition = require('./find-stop-position');

var CallingPointWrapper = React.createClass({
  render : function(){
    var callingPointsData = this.props.data;
    return (
      <div className="calling-point-wrapper">
        {callingPointsData.map(function(result, index) {
          var position = findStopPosition(index, (callingPointsData.length))
          return <CallingPoint key={index} data={result} position={position}/>
        })}
      </div>
    )
  }
});

module.exports = CallingPointWrapper;
