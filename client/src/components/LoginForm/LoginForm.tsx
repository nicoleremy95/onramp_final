import * as React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Container, TextField, Typography, Button} from '@material-ui/core';
import API from '../../utils/API';
import './loginForm.css';


interface State {
    username: string,
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
        marginBottom: '100px'
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


export default function Login() {
    
    const classes = useStyles();

    //initialize form object state
    const [loginObj, setLoginObject] = useState<State>({
        username:"",
        password:""
    })

    const history = useHistory();

    // const login = () => {
        
    // }

    //TODO: move to app.tsx and pass down with props 
    //input change function
    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>) {
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setLoginObject({ ...loginObj,[name]: value})
    }

    //TODO: move to app.tsx and pass down with props 
    function inputSubmit (e: React.FormEvent<HTMLFormElement>) : boolean { 
        // e.preventDefault();  
        history.push("/")      
        API.login(loginObj)
        .then(loginObj =>{
            history.push("/")
            // console.log('loginObj', loginObj)
        })
        .catch(err =>console.log('err', err))
        return true;
    }
    return (
        <div 
            className={classes.root}
        >
        <Container>
        <Grid container >
            <Grid item xs={1} sm={1} md={3} lg={3} direction="column"></Grid>
            <Grid item xs ={10} sm={10} md={6} lg={6}>
            <div className="login-bubble">
                <div className="login-arrow login-bottom right"></div>
                    <form 
                    // className={classes.root} 
                        noValidate 
                        autoComplete="on" 
                        onSubmit={inputSubmit}
                    >
                        <Typography align="right">
                            <h2 className="login">...login?</h2>
                        </Typography>
                        <TextField 
                            id="outlined-basic" 
                            label="username" 
                            variant="outlined" 
                            type="textarea"
                            name="username"
                            value={loginObj.username}
                            onChange={inputChange}
                            className={classes.input}
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="password" 
                            variant="outlined" 
                            type="password"
                            name="password"
                            value={loginObj.password}
                            onChange={inputChange}
                            className={classes.input}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            login
                        </Button>
                    </form>
                    </div>
                </Grid>                 
                <Grid item xs={1} sm={1} md={2} lg={2} direction="column"></Grid>
            </Grid>
        </Container>
    </div>
    )
}
