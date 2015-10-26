var React = require('react');
var CallingPoint = require('./calling-point');

var CallingPointWrapper = React.createClass({
  render : function(){
    var callingPointsData = this.props.data;
    //console.log(callingPointsData);
    return (
      <div>
        {callingPointsData.map(function(result) {
          return <div className="calling-point-wrapper"><CallingPoint key={result.id} data={result}/></div>
        })}
      </div>
    )
  }
});

module.exports = CallingPointWrapper;
