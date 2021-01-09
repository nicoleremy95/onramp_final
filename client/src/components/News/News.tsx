import * as React from 'react';
import {useState, useEffect} from 'react';
import { createStyles, makeStyles, ThemeProvider, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './news.css'

//set up interface for props taken from parent component (Home.jsx)
interface Props {
    newsDB: object;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px'
    },
    cards: {
      minWidth: '200px',
      maxWidth: '600px',
      margin: '100px',
    },
    textField:{
      width: '55ch',
      // padding: '5%'
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
  
            // const newsId = news.data._id
            // const newsCreator = news.data.newsCreator;
            // const newsData = news.data.newsData;
            
//take props from parent Home.tsx
export default function News({newsDB}: Props) : JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const classes = useStyles();

    const newsArr:object[] = [];
    // Props.map(item =>{
    //     console.log('item.newsCreator', item.newsCreator)
    //     newsArr.push(
    //         <Card className={classes.root} variant="outlined">
    //             <CardContent>
    //             <Typography className={classes.title} color="textSecondary" gutterBottom>
    //                 {item.newsCreator}
    //             </Typography>
    //             <Typography variant="h5" component="h2">
    //                 be{bull}nev{bull}o{bull}lent
    //             </Typography>
    //             <Typography variant="body2" component="p">
    //                 {item.newsData}
    //                 <br />
    //                 {'"a benevolent smile"'}
    //             </Typography>
    //             </CardContent>
    //             <CardActions>
    //             <Button size="small">Learn More</Button>
    //             </CardActions>
    //         </Card>
    //     )
    // })
    
        
    
    return (
        <div 
          className= {classes.root}
        >
           {/* {newsArr.map(news =>{return news})} */}
          <Card 
            className={classes.cards} 
            variant="outlined"  
          >
              <CardContent>
              <Typography 
                className="News-cards-category" 
                color="textSecondary" 
                gutterBottom>
                  food
              </Typography>
              <Typography 
                variant="h5" 
                component="h2"
              >
                Any one else craving tacos???
              </Typography>
              <Typography 
                variant="body2" 
                component="p"
              >
                  Angie
              </Typography>
              </CardContent>
              <CardActions disableSpacing = {false}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small" onClick={handleOpen}>react</Button>
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
              </CardActions>
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
          <Card 
            className="News-cards-root" 
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
                I am thinking of going to cuba, any recs?
              </Typography>
              <Typography 
                variant="body2" 
                component="p"
              >
                  fred
              </Typography>
              </CardContent>
              <CardActions disableSpacing = {false}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small" onClick={handleOpen}>react</Button>
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
              </CardActions>
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
