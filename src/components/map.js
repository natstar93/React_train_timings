var React = require('react');

 var Map = React.createClass({
  render: function() {
    var actual = this.props.actual;
    var position = this.props.position;
    var noOfCallingPoints = this.props.noOfCallingPoints;
    var firstStop = (position === 'first');
    var lastStop = (position === 'last');
    console.log(position);
    var mapImage = function() {
      if (actual && firstStop) {
        return 'first-departed';
      } else if (!actual && lastStop) {
        return 'last-not-visited';
      } else if (actual) {
        return 'departed';
      } else {
        return 'not-visited';
      }
    }
    return (
      <div className='map'><img src={'src/images/' + mapImage() + '.png'}/></div>
    )
  }
});

module.exports = Map;
