import * as React from 'react';
import {useState} from 'react';
import {createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Container, Card, CardActions, IconButton, CardContent, Button, Typography, TextField, Backdrop} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import './news.css'
import API from '../../utils/API';

interface State {
  message: string;
}


interface Props {
  newsDB: any[],
  // currentUserData: object
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'auto'
    },
    cards: {
      marginTop: '50px',
      marginBottom: 'auto',
      boxShadow: theme.shadows[5],
    },
    textField:{
      width: '80%',
      marginBottom: '20px'
    },
    cardAction: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      margin: "5%"
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#eee',
      border: '2px solid #FFC0CB',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);


// console.log ("Function News running");

export default function News({newsDB}: Props) : JSX.Element {
  // console.log('News.tsx newsDB.newsData', newsDB.newsData)
  const classes = useStyles();

  const [commentObj, setCommentObj] = useState<State>({
    message:""
  });

  const [open, setOpen] = React.useState(false);

  const [reactionObj, setReactionObj] = useState<boolean>(false);

  // function favoriteCom(e: React.ChangeEvent<HTMLFormElement>): boolean{
  //   API.postReaction(reactionObj, newsDB._id)
  //   return true;
  // }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function inputChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    //TODO: refactor any
    const{name,value}: any = e.target;
    setCommentObj({...commentObj, [name]: value})
  }

  const newsArr = [];
  for(let i = 0; i < newsDB.length; i ++){
    console.log('newsDB[i].userId', newsDB[i].userId)
     newsArr.push(
      <div className="news-bubble">
      <div className="news-arrow news-bottom left"></div>
        <Typography align="left">
            <h2 className="news">...more talK!</h2>
        </Typography>
         <Card 
            className={classes.cards} 
            variant="outlined" 
          >
              <CardContent>
              <Typography 
                className="News-cards-category" 
                color="textSecondary" 
                gutterBottom>
                  travel
              </Typography>
              <Typography 
                variant="h5" 
                component="h2"
              >
                {newsDB[i].newsData}
              </Typography>
              <Typography 
                variant="body2" 
                component="p"
              >
                {newsDB[i].userId.username}
              </Typography>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <EmojiEmotionsIcon onClick={handleOpen} />
                </IconButton>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <Button size="small">❤️️</Button>
                    <Button size="small">😜️</Button>
                    <Button size="small">😈</Button>
                    <Button size="small">😍</Button>
                    <Button size="small">😂</Button>
                    <Button size="small">😊</Button>
                  </div>
                </Fade>
              </Modal>
              </CardActions >
              <div
                className="News-cards-comment"
              >
                <TextField
                  id="filled-multiline-static"
                  label="comment"
                  variant="filled"
                  className={classes.textField}
                />
              </div>
              
         </Card>
         </div>
     )
  }
  

    return (
      <div 
        className= {classes.root}
      >
         <Container>
           <Grid container>
             <Grid item xs={1} sm={1} md={3} lg={3}></Grid>
             <Grid item xs={10} sm={10} md={6} lg={6}>
              {newsArr.map(news =>{return news})}
             </Grid>
             <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
           </Grid>
         </Container>
       </div>
    )
}

