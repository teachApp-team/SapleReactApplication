import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startTest } from '../store';
import { checkTest } from '../store';

class Test extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
    this.doStart = this.doStart.bind(this);
    this.doCheck = this.doCheck.bind(this);
  }

  doStart(e){
    let action = startTest();
    this.props.dispatch(action);
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
          <span>
            <button onClick={this.doStart}>10問Start</button>
          </span>
          <span>
            <button onClick={this.doStart}>30問Start</button>
          </span>
          <span>
            <button onClick={this.doStart}>50問Start</button>
          </span>
        </div>
        <hr/>
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
          <hr/>
          <div>
            <div>
              判定: {this.props.check}
            </div>
            <div>
              答え: {this.props.answer}
            </div>
          </div>
        </div>
        <hr/>
        <button onClick={this.doStart}>次の問題へ</button>
      </div>
    )
  }
}
Test = connect((state) => state)(Test);
export default Test;