import css from 'styled-jsx/css';

export default <style jsx>{`
  body {
    color: #669;
  }
  header {
    font-size: 64pt;
    font-weight:bold;
    text-align: right;
    letter-spacing: -8px;
    color:#ddddff;
    margin: -32px 5px;
  }
  footer {
    color: #99c;
    font-size: 12pt;
    text-align:right;
    border-bottom: 1px solid #99c;
    margin:50px 0px 10px 0px;
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
  h1 {
    font-size:22pt;
    font-weight: bold;
    text-align: left;
    letter-spacing: 0px;
    color:#77a;
    margin:-50px 0px 50px 0px;
  }
  p {
    margin: 0px;
    color: #669;
    font-size: 16pt;
  }
  .subtitle {
    margin-bottom: 10px;
    color: #669;
    font-size: 13pt;
  }

  .space-around-container {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    width: 100%;
  }


  .circledata {
    width: 200px;
  }
  .circledata text {
    font-size: 0.5rem;
  }
  .list-wrap {
    list-style:  none;  
    margin:  0;      
    padding: 0;      
  }
  .list-circle:before {
    content:  "";      
    width:  10px;               
    height:  10px;              
    display:  inline-block;    
    border-radius:  50%;  
    position:  relative;        
    top: -1px;                  
    margin-right: 5px;          
  }
  .list-circle1:before {
    background-color: #C13C37;
  }
  .list-circle2:before {
    background-color: blue;
  }
  .list-circle3:before {
    background-color: grey;
  }
  .wrong-button {
    background-color: blue;
  }
  .yet-button {
    background-color: #777777;
    color: balck;
  }

  .level-circle {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: skyblue;
    text-align:center;
    line-height: 40px;
  }
  .display-center {
    width: 100px;
    text-align:center;
  }

`}</style>