import * as React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './news.css'

//set up interface for props taken from parent component (Home.jsx)
interface Props {
    newsDB: object;
}

const useStyles = makeStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
            // const newsId = news.data._id
            // const newsCreator = news.data.newsCreator;
            // const newsData = news.data.newsData;
            
//take props from parent Home.tsx
export default function News({newsDB}: Props) : JSX.Element {
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
            className="News-cards-root" 
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
              <CardActions>
              <Button size="small">comment</Button>
              <Button size="small">react</Button>
              </CardActions>
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
              <CardActions>
                <Button size="small">comment</Button>
                <Button size="small">react</Button>
              </CardActions>
              <TextField
                id="filled-multiline-static"
                label="comment"
                // multiline
                rows={4}
                // defaultValue="hey there friend"
                variant="filled"
              />
         </Card>
        </div>
    )
}
