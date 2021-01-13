import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Typography, Container, Grid, Tooltip, Link, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './footer.css';
import { CopyrightSharp } from '@material-ui/icons';

//STYLES
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
    link:{
      "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      },
      backgroundColor: "white",

    },
    moreTalk: {
      fontSize: "250% !important",
      font: "'Pacifico', cursive",
    },
    footerLinks: {
      textDecoration: "none",
      color: "white !important"
    },
    icon: {
      marginLeft: "10%"    
    },
    copy: {
      verticalAlign: 'middle',
      display: "inlin-flex"
    }
  }))

//FC
export default function Footer() {
  //DECLARATIONS
  const classes = useStyles();

  //RENDER
  return (
    <React.Fragment>
      <CssBaseline />
      <div className ={classes.footer}>
        <Container className={classes.root}>
            <Grid item xs >
              <Grid item xs>
                <CopyrightIcon className={classes.copy}/>
              {/* <Tooltip title="Linkedin">
                  <IconButton aria-label="delete" edge="start">
                    <Link  href="https://www.linkedin.com/in/nicole-remy-190202166/" target="blank" className={classes.footerLinks}>
                      <LinkedInIcon  className={classes.icon} fontSize="large" />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton aria-label="delete">
                    <Link  href="https://github.com/nicoleremy95" target="blank" className={classes.footerLinks}>
                      <GitHubIcon fontSize="large"/>
                    </Link>
                  </IconButton>
                </Tooltip> */}
                <Typography gutterBottom align="left">
                  <h2>more talK with friendS</h2>
                </Typography>
                <Typography color="textSecondary" align="left">
                  <p>a product by: nicole remy</p>
                </Typography>
                <Typography className={classes.moreTalk} align="left">
                  <h1>suP?</h1>
                </Typography>
              </Grid>
            </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}