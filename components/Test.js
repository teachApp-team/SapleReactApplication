import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startTest } from '../store';
import { checkTest } from '../store';
import Start from '../components/Start';
import Answer from '../components/Answer';
import Check from '../components/Check';



class Test extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
  }

  render(){
    if (this.props.status=="default"){   
      return(
        <div>
        <Start />     
        </div>

      )
    } else if (this.props.status=="start") {
      return(
        <div>
          <Answer /> 
        </div>   
      )
    } else if (this.props.status=="check") {      
      return(
        <Check /> 
      )
    }
  }
}
Test = connect((state) => state)(Test);
export default Test;