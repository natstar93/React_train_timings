var React = require('react');

 var Map = React.createClass({
  render: function() {
    var position = this.props.position;
    return (
      <div className='map'><img src={'src/images/' + position + '.png'}/></div>
    )
  }
});

module.exports = Map;
