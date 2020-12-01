import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Button, CardActions, List, ListItem, ListItemText} from '@material-ui/core';


class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rechart: {
        labels: [
          ['2019年', '1月1日'],
          ['2019年', '1月2日'],
          ['2019年', '1月3日'],
          ['2019年', '1月4日'],
          ['2019年', '1月5日'],
          ['2019年', '1月6日'],
          ['2019年', '1月7日']
        ],
        datasets: [
          {
            data: [40, 20, 100, 50, 30, 40, 10],
            backgroundColor: 'rgba(255, 0, 0, 0.8)',
            label: '正解単語数',
          },
          {
            data: [10, 30, 50, 30, 20, 40, 20],
            backgroundColor: 'rgba(0, 0, 255, 0.8)',
            label: '不正解単語数',
          }
        ]
      },
      baroption: {
        title: {
          display: true,
          text: '今週の学習状況'
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: 0,
            }
          }]
        }
      },
      pierechart: {
        labels: ["正解", "未習得", "不正解"],
        datasets: [{
          backgroundColor: [
              "rgba(255, 0, 0, 0.8)",
              "rgba(0, 0, 255, 0.8)",
              "grey",
          ],
          data: [38, 31, 21]
        }]
      },
      pieoption: {
        title: {
          display: true,
          text: 'システム英単語'
        }
      }
    }
  }
  
  render(){
    console.log(this.state.dataGraph)
    return(
      <div>
        <Bar data={this.state.rechart} options={this.state.baroption} />
        <Card style={{width: "40%"}}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h7" component="h7">
                今週の習得単語数
              </Typography>
              <Typography variant="body2" component="p">
                100単語
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{width: "40%"}}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h7" component="h7">
                累計習得単語数
              </Typography>
              <Typography variant="body2" component="p">
                100単語
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{width: "40%"}}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h7" component="h7">
                今日の習得単語数
              </Typography>
              <Typography variant="body2" component="p">
                100単語
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Pie data={this.state.pierechart} options={this.state.pieoption}  />
      </div>
    );
  }
}
Graph = connect((state) => state)(Graph);
export default Graph;