import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import AppBarMD from '@material-ui/core/AppBar';
import { TabPanel } from '@material-ui/lab';
import { useState } from "react";

class TextInfo extends Component {
  constructor(props) {
    super(props);
  }
  handleChange(e, v) {
    console.log(e)
    console.log(v)
  }
  render(){
    return (
      <div className="space-around-container">
        <div className="display-center">
          <div className="level-circle">20%</div>
          <div>000-100</div>
        </div>
        <div className="display-center">
          <div className="level-circle">20%</div>
          <div>100-200</div>
        </div>
        <div className="display-center">
          <div className="level-circle">20%</div>
          <div>200-300</div>
        </div>
        <div className="display-center">
          <div className="level-circle">20%</div>
          <div>300-400</div>
        </div>
      </div>
    );
  }
}

TextInfo = connect((state) => state)(TextInfo);
export default TextInfo;