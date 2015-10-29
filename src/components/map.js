var React = require('react');

 var Map = React.createClass({
  render: function() {
    var actual = this.props.actual;
    var position = this.props.position;
    var mapImage = function() {
      if (actual && (position === 0)) {
        return 'first-departed';
      } else if (actual) {
        return 'departed';
      } else {
        return 'blue';
      }
    }
    return (
      <div className='map'><img src={'src/images/' + mapImage() + '.png'}/></div>
    )
  }
});

module.exports = Map;
