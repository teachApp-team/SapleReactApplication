import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { checkTest } from '../store';


class Answer extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
    this.doCheck = this.doCheck.bind(this);
  }
  doCheck(e){ 
    var choise = e.target.id;
    let action = checkTest(choise);
    this.props.dispatch(action);
  }

  render(){
    return(
      <div>
        <div>
        問題
        <p>{this.props.question}</p>
        </div>
        <div>
          選択肢
          <p onClick={this.doCheck} id="t">{this.props.answer}</p>
          <p onClick={this.doCheck} id="f">{this.props.alternative[0]}</p>
          <p onClick={this.doCheck} id="f">{this.props.alternative[1]}</p>
          <p onClick={this.doCheck} id="f">{this.props.alternative[2]}</p>
        </div>
      </div>
    );
  }
}

Answer = connect((state) => state)(Answer);
export default Answer;