var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    var numSeconds = parseInt(strSeconds,10);
    if(typeof numSeconds === 'number' && numSeconds>0){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(numSeconds);
    } else {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(0);
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter Time in Seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
