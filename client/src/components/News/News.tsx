import * as React from 'react';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
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
  message: string,
  // id: string
}


interface Props {
  newsDB: any[],
  currentUser: boolean
}

interface ParamTypes {
  id: string
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
      width: '90%',
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
    button:{
      marginBottom: '20px'
    }
  })
);

export default function News({newsDB, currentUser}: Props) : JSX.Element {
  // console.log('News.tsx newsDB[0]', newsDB[0])
  const classes = useStyles();

  const [commentObj, setCommentObj] = useState<State>({
    message:"",
    // id: newsDB
  });

  const [open, setOpen] = React.useState(false);

  const [reactionObj, setReactionObj] = useState<boolean>(false);

  const [inputField, setInputField] = useState<boolean>(true);

  const history = useHistory();

  const {id} = useParams<ParamTypes>();
  
  // console.log('id', id)

  const addCommBtn = `/comment/${id}`
  // console.log('News.tsx id', id)

  //TODO: work on function and api call for favoriting a sup feed 
  // const params = useParams<{params: string}>();
  // console.log('params', params)
  // function favoriteCom(e: React.ChangeEvent<HTMLFormElement>): boolean{
  //   API.postReaction(reactionObj, newsDB._id)
  //   return true;
  // }

  //TODO: work on api call to get newsid for particular sup feed for comments and reactions
  // useEffect(()=>{
  //   API.getNewsById(id)
  //   .then(res=>{
  //     console.log('News.tsx res.data', res.data)
  //   })
  // })

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
    //TODO: user protection around submitting an empty form 
    // if(!value){
    //   setInputField(true)
    // }
  }
  
  function inputSubmit(e: React.ChangeEvent<HTMLFormElement>) : boolean {
    e.preventDefault();
    // console.log('News.tsx id', id)
    //TODO: work on input api call for comments 
    // API.getNewsById(id)
    // .then(res=>{
    //   console.log('News.tsx res.data', res.data)
    // })
    API.postComment(commentObj, "5ffdf55c81a5d9c8ca26c543")
    .then(comment =>{
      // history.push("/")
      console.log('News.tsx comment', comment)
    })
    .catch(err =>console.log('err', err))
    return true;
  }

  const newsArr = [];
  for(let i = 0; i < newsDB.length; i ++){
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
                  <EmojiEmotionsIcon onClick={handleOpen} />
                </IconButton>
              </CardActions >
              <div
                className="News-cards-comment"
              >
              {currentUser? <form
                  noValidate 
                  autoComplete="on" 
                  onSubmit={inputSubmit}
                >
                  <TextField
                  id="filled-multiline-static"
                  label="comment"
                  multiline
                  rows={2}
                  variant="filled"
                  className={classes.textField}
                  type="textarea"
                  name="message"
                  value={commentObj.message}
                  onChange={inputChange}
                  inputProps={{
                    maxlength: 100
                  }}
                  helperText={`${commentObj.message.length}/100`}
                />
                <Button 
                  variant="contained" 
                  color="primary"  
                  type="submit" 
                  data-comm-news-id={id}
                  className={classes.button}
                >
                  send
                </Button>
                {/* TODO: input user protection around submitting an empty form  */}
                {/* {inputField===false? <Button 
                  variant="contained" 
                  color="primary"  
                  type="submit" 
                  data-comm-news-id={id}
                  className={classes.button}
                >
                  send
                </Button> : null} */}
                
                </form>: null}
                
               
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

