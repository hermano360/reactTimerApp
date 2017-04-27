var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer= React.createClass({
  getInitialState: function(){
    return {
      elapsed:0,
      timerStatus:'paused'
    };
  },
  startTimer:function(){
    this.timer = setInterval(()=>{
      var newElapsed= this.state.elapsed + 1;
      this.setState({
        elapsed:newElapsed
      });
    },1000);
  },
  componentWillUpdate:function(nextProps, nextState){
    if(this.state.timerStatus !== nextState.timerStatus){
      switch(nextState.timerStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            elapsed:0,
            timerStatus:'paused'
          });
        case 'paused':
          clearInterval(this.timer);
          break;
        }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer=undefined;
  },
  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus:newStatus
    });
  },
  render: function(){
    var {elapsed,timerStatus}= this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
      <Clock totalSeconds={elapsed}/>
      <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})

module.exports = Timer;
