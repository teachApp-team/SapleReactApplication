import style from '../static/Style';
import React,  { Component } from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Button, CardActions, List, ListItem, ListItemText} from '@material-ui/core';


class Top extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <p>先生からのお知らせ</p>
        <Card >
          <CardActionArea style={{backgroundColor: "#EEEEEE"}}>
            <CardContent>
              <Typography variant="h7" component="h7">
                第一回単語テスト
              </Typography>
              <Typography variant="body2" component="p">
                12/24までに受けてください。
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">テストを受験</Button>
            </CardActions>
          </CardActionArea>
        </Card>

        <p>学習中の教材</p>
        <Card style={{width: "200px"}}>
          <CardActionArea>
            <CardContent>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/text.jpg"
                title="Contemplative Reptile"
              />
              <Typography gutterBottom variant="h6" component="h5">
                ターゲット英熟語
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                1000個の英熟語が収録されています。受験生の間で差がつくのが英熟語です。
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="display-center">
            <Button size="small" color="primary">
              学習する
            </Button>
          </CardActions>
        </Card>
        <div className="learning-textbook-wrapper">
          <div className="learning-textbook-container">
          </div>
        </div>

        <p>ランキング</p>
        <Card >
          <CardActionArea>
            <CardContent style={{backgroundColor: "#EEEEEE"}}>
              <Typography variant="h6" component="h6">
                現在のあなたの得点は...
              </Typography>
              <div >
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Kosuke Fujita"
                      secondary="90点"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Hiroharu Hara"
                      secondary="50点"
                    />
                  </ListItem>
                </List>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>


        <p>教材一覧</p>
        <Card style={{width: "200px"}}>
          <CardActionArea>
            <CardContent>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/text.jpg"
                title="Contemplative Reptile"
              />
              <Typography gutterBottom variant="h6" component="h5">
                ターゲット英熟語
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                1000個の英熟語が収録されています。受験生の間で差がつくのが英熟語です。
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="display-center">
            <Button size="small" color="primary">
              学習する
            </Button>
          </CardActions>
        </Card>
      </div>
    );}
}

export default Top;