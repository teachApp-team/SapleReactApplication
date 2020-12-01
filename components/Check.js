import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { startTest } from '../store';


class Check extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
    this.doStart = this.doStart.bind(this);
  }
  doStart(e){
    let action = startTest();
    this.props.dispatch(action);
  }

  render(){
    return(
      <div>
        <div>
          <div>
            判定: {this.props.check}
          </div>
          <div>
            答え: {this.props.answer}
          </div>
        </div>
        <hr/>
        <button onClick={this.doStart}>次の問題へ</button>
      </div>
    );
  }
}
Check = connect((state) => state)(Check);
export default Check;