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
import { IconButton } from '@material-ui/core';
import './footer.css'


const useStyles = makeStyles((theme:Theme) =>({
    footer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(to bottom left, white, #7a8a8a)',
        marginTop:"auto",
        minHeight: '10vh'
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
              <Grid item xs >
                <Grid item xs>
                  <Typography gutterBottom align="left">
                    <h2>more talK!</h2>
                  </Typography>
                 
                  <Typography color="textSecondary" align="left">
                    <p>a product by: nicole remy</p>
                  </Typography>

                  <Tooltip title="Linkedin">
                    <IconButton aria-label="delete" edge="start">
                      <Link  href="https://www.linkedin.com/in/nicole-remy-190202166/" target="blank" className="Footer-link-white">
                        <LinkedInIcon  fontSize="large" />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <IconButton aria-label="delete">
                      <Link  href="https://github.com/nicoleremy95" target="blank" className="Footer-link-white">
                        <GitHubIcon fontSize="large"/>
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Typography className="more-talk" align="left">
                    <h1>suP?</h1>
                  </Typography>
                </Grid>
              </Grid>
          </Container>
        </div>
      </React.Fragment>
    );
  }