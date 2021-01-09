import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles, Theme} from '@material-ui/core/styles';
import './footer.css'
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme:Theme) =>({
    footer: {
        display: 'flex',
        // height: '150px !important',
        background: '#7a8a8a',
        bottom: 0,
        width: '1',
        position:"relative",
    },
    root: {
      flexGrow: 1,
      margin: '20px'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    link:{
      "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      },
      backgroundColor: "white",

    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <div className ={classes.footer}>
          <Container className={classes.root}>
              <Grid item xs direction="column">
                <Grid item xs className="grid">
                  <Typography gutterBottom variant="h5" align="left">
                    more talK?
                  </Typography>
                 
                  <Typography variant="body2" color="textSecondary" align="left">
                    a product by: nicole remy
                  </Typography>

                  <Tooltip title="Linkedin">
                    <IconButton aria-label="delete" edge="start">
                      <Link  href="https://www.linkedin.com/in/nicole-remy-190202166/" target="blank">
                        <LinkedInIcon  fontSize="large" />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <IconButton aria-label="delete">
                      <Link  href="https://github.com/nicoleremy95" target="blank">
                        <GitHubIcon fontSize="large"/>
                      </Link>
                    </IconButton>
                  </Tooltip>
            
                </Grid>
                <Grid item xs={3}>
                  
                </Grid>
                <Grid item>
                  <Typography className="more-talk" align="left" variant="h2">
                    suP?
                  </Typography>
                </Grid> 
              </Grid>
          </Container>
        </div>
      </React.Fragment>
    );
  }