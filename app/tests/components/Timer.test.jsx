var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', ()=>{
    expect(Timer).toExist();
  });

  describe('startTimer',()=>{
    it('should start counting up at intial start',(done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      expect(timer.state.elapsed).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      timer.handleStatusChange('started');
      setTimeout(()=> {
        expect(timer.state.elapsed).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      },1001);
    });

    it('should keep elapsed time and stop timer at paused',(done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');

      setTimeout(()=> {
        timer.handleStatusChange('paused');
        expect(timer.state.elapsed).toBe(1);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      },1001);
    });

    it('should restart elapsed time and stop timer at stopped',(done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');

      setTimeout(()=> {
        timer.handleStatusChange('stopped');
        expect(timer.state.elapsed).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      },1001);
    });
  });
});
