import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() =>({
    container: {
        width: '1'
    },
    footer: {
        display: 'flex',
        // flexDirection: 'column',
        width: '100% !important',
        height: '100px !important',
        background: '#7a8a8a',
        bottom: 0
    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <div className ={classes.container}>
          <Typography component="div" className={classes.footer} />
        </div>
      </React.Fragment>
    );
  }