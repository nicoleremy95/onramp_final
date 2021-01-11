import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import './UserComp.css'

interface State {
    username: string,
    name: string,
    email: string,
    password: string 
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        // display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop:'auto',
    },
    input: {
        '& > *': {
            background: 'white',
        },
        width: "100%",
        marginRight: '100px'
    },
    formControl: {
        minWidth: "60%",
    },
    send:{
        marginTop: '50px',
        marginRight: "0px"
    }
  }),
);

export default function UserComp() {
    const classes = useStyles();

    const [userObj, setUserObj] = useState<State>({
        username:'',
        name: '',
        email: '',
        password: ''
    })

    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>){
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setUserObj({ ...userObj,[name]: value})
        // setIcon(true)
    }

    //TODO:
    // input submit function
    function inputSubmit (e: React.FormEvent<HTMLFormElement>) {

    }

    return (
        <div 
            className={classes.root}
            >
            <Container>
            <Grid container >
                <Grid item xs={1} md={3} lg={3} direction="column"></Grid>
                <Grid item xs ={10} md={6} lg={6}>
                <div className="user-bubble">
                    <div className="user-arrow user-bottom right"></div>
                    <form 
                    // className={classes.root} 
                        noValidate 
                        autoComplete="on" 
                        onSubmit={inputSubmit}
                    >
                        <Typography align="right">
                            <h2 className="user">new account</h2>
                        </Typography>
                        <TextField 
                            id="outlined-basic" 
                            label="username" 
                            variant="outlined" 
                            type="textarea"
                            name="username"
                            value={userObj.username}
                            onChange={inputChange}
                            className={classes.input}
                    
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="password" 
                            variant="outlined" 
                            type="textarea"
                            name="password"
                            value={userObj.password}
                            onChange={inputChange}
                            className={classes.input}
                            
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="name" 
                            variant="outlined" 
                            type="textarea"
                            name="name"
                            value={userObj.name}
                            onChange={inputChange}
                            className={classes.input}
                            
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="email" 
                            variant="outlined"                                     type="textarea"
                            name="email"
                            value={userObj.email}
                            onChange={inputChange}
                            className={classes.input}
                        />
                    </form>
                </div>
                </Grid>                 
                <Grid item xs={1} md={2} lg={2} direction="column"></Grid>
            </Grid>
            </Container>
        </div>
    )
}

