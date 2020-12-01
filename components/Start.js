import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { startTest } from '../store';
import Button from '@material-ui/core/Button';
import { PieChart } from 'react-minimal-pie-chart';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextInfo from '../components/TextInfo';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  content: {
    margin: 0,
  },
  detail: {
    display: 'block',
  },
});

class Start extends Component {
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
        <TextInfo />
        <hr/>
        <div>
          <div className="space-around-container">
            <div className="circledata">
              <PieChart  startAngle= {270} data ={[
                { title: '正解', value: 10, color: '#C13C37' },
                { title: '不正解', value: 15, color: 'blue' },
                { title: '未学習', value: 20, color: 'grey' },
              ]}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              animate ={true}
              animationDuration ={400}
              />
            </div>
            <div>
              <p>ターゲット1000</p>
              <div className="subtitle">0000-1000</div>
              <ul className="list-wrap">
                <li className="list-circle list-circle1"><span>正解</span><span>(10問)</span></li>
                <li className="list-circle list-circle2"><span>不正解</span><span>(15問)</span></li>
                <li className="list-circle list-circle3"><span>未学習</span><span>(20問)</span></li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="subtitle" style={{marginTop: "10px"}}>単語テストを開始する</div>
          </div>
          <div className="space-around-container">
            <div>
              <InputLabel id="label">単語数</InputLabel>
              <Select labelId="label" id="select" value="10">
                <MenuItem value="10">10単語</MenuItem>
                <MenuItem value="20">20単語</MenuItem>
                <MenuItem value="30">30単語</MenuItem>
                <MenuItem value="40">40単語</MenuItem>
                <MenuItem value="50">50単語</MenuItem>
              </Select>
            </div>

            <div>
              <Button variant="contained" color="secondary" onClick={this.doStart}>
                総復習
              </Button> 
            </div>
            <div>
              <Button className="wrong-button" variant="contained" color="primary" onClick={this.doStart}>
                不正解
              </Button> 
            </div>
            <div>
              <Button className="yet-button" variant="contained" color="secondary" onClick={this.doStart}>
                未学習
              </Button> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Start = connect((state) => state)(Start);
export default Start;