import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() =>({
    footer: {
        display: 'flex',
        height: '100px !important',
        background: '#7a8a8a',
        bottom: 0,
        width: '1',
    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <div className ={classes.footer}>
          <Typography component="div"  />
          <Container>
              <Grid item xs={3}>
                <h2>suP?</h2>
              </Grid>
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={6}>
                <h1>more talK!</h1>
              </Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={6}>
                <h1>?</h1>
              </Grid>
          </Container>
        </div>
      </React.Fragment>
    );
  }