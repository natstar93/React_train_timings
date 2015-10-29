var React = require('react');

 var Map = React.createClass({
  render: function() {
    var actual = this.props.data;
    var mapImage = function() {
      return actual ? 'green' : 'blue'
    }
    return (
      <div className='map'><img src={'src/images/' + mapImage() + '.png'}/></div>
    )
  }
});

module.exports = Map;
