var React = require('react');
var CallingPoint = require('./calling-point');

var CallingPointWrapper = React.createClass({
  render : function(){
    var callingPointsData = this.props.data;
    return (
      <div className="calling-point-wrapper">
        {callingPointsData.map(function(result) {
          return <CallingPoint key={result.id} data={result}/>
        })}
      </div>
    )
  }
});

module.exports = CallingPointWrapper;
