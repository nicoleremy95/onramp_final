import * as React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//set up interface for props taken from parent component (Home.jsx)
interface Props {
    newsDB: object;
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
            // const newsId = news.data._id
            // const newsCreator = news.data.newsCreator;
            // const newsData = news.data.newsData;
            
//take props from parent Home.tsx
export default function News({newsDB}: Props) : JSX.Element {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


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
        <div className= 'News-cards'>
           {newsArr.map(news =>{return news})}
        </div>
    )
}
