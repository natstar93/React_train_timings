var React = require('react');
var CallingPoint = require('./calling-point');

var CallingPointWrapper = React.createClass({
  render : function(){
    var callingPointsData = this.props.data;
    return (
      <div className="calling-point-wrapper">
        {callingPointsData.map(function(result, index) {
          return <CallingPoint key={index} data={result}/>
        })}
      </div>
    )
  }
});

module.exports = CallingPointWrapper;
