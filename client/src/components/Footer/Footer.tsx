import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles, Theme} from '@material-ui/core/styles';
import './footer.css'


const useStyles = makeStyles((theme:Theme) =>({
    footer: {
        display: 'flex',
        // height: '150px !important',
        background: '#7a8a8a',
        bottom: 0,
        width: '1',
        position:"relative"
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    link:{
      
    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <div className ={classes.footer}>
          <Typography component="div"/>
          <Container className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" align="left">
                    suP?
                  </Typography>
                  <Typography variant="body2" gutterBottom align="left">
                    nicole remY
                  </Typography>
                  <Typography variant="body2" color="textSecondary" align="left">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  
                  <Link color="inherit" href="https://www.linkedin.com/in/nicole-remy-190202166/" target="blank"><LinkedInIcon fontSize="large" /></Link>
                  <Link color="inherit" href="https://github.com/nicoleremy95" target="blank"><GitHubIcon fontSize="large" /></Link>
                </Grid>
                <Grid item>
                  <Typography className="more-talk" align="left" >
                    more talK?
                  </Typography>
                </Grid> 
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">@copyright 2021</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </React.Fragment>
    );
  }