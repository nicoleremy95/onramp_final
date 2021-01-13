import * as React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {TextField, Button, Grid, Container, Typography, CardContent, Card} from '@material-ui/core';
import API from '../../utils/API';
import './sup.css';

// INTERFACE
interface State {
    newsData: string,
    //TODO: add in newstype in form
    // newsType: string,
}

interface Props {
    currentUser: boolean,
    currentUserData: any
}

interface LoginProps {
    username: string,
    password: string
}

//STYLES
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
    },
    welcome: {
        fontSize: '30px !important',
        textAlign: 'left'
    },
    moreTalk: {
        fontSize: '30px !important',
        textAlign: 'left'
    },
    cards: {
        marginTop: '50px',
        marginBottom: 'auto',
        boxShadow: theme.shadows[5],
    },
    button:{
        marginTop: '20px',
        marginBottom: "20px"
    },
  }),
);

//FC
export default function Sup({currentUser, currentUserData}: Props){
    //DECLARATIONS
    const classes = useStyles();

    const [newsObj, setNewsObj] = useState<State>({
        newsData:"",
        //TODO: add in newstype in form
        // newsType: string,
    })

    const [loginObj, setLoginObject] = useState<LoginProps>({
        username:"",
        password:""
    })

    const history = useHistory();

    //TODO: add in newstype to form
    // const [state, setState] = React.useState<{ age: string | number; name: string }>({
    //     age: '',
    //     name: 'hai',
    //   });
    
    //TODO: add in newstype to form
    // const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    // const name = event.target.name as keyof typeof state;
    // setState({
    //     ...state,
    //     [name]: event.target.value,
    // });
    // };
    
    function inputChangeLogin (e: React.ChangeEvent<HTMLTextAreaElement>) {
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setLoginObject({ ...loginObj,[name]: value})
    }

    //TODO: move to app.tsx and pass down with props 
    function inputSubmitLogin (e: React.FormEvent<HTMLFormElement>) : boolean { 
        history.push("/")     
        API.login(loginObj)
        .then(loginObj =>{
            history.push("/")
            // console.log('loginObj', loginObj)
        })
        .catch(err =>console.log('err', err))
        return true;
    }
    //TODO: move to App.tsx and pass down with props 
    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>) {
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setNewsObj({ ...newsObj,[name]: value})
        // setIcon(true)
    }

    //TODO: move to app.tsx and pass down with props 
    function inputSubmit (e: React.FormEvent<HTMLFormElement>) : boolean { 
        if(!newsObj){
            alert('hey')
        }
        API.postNews(newsObj)
        .then(news =>{
            console.log('news', news)
        })
        .catch(err =>console.log('err', err))
        setNewsObj({
            newsData: ""
            //TODO: add in newstype to form
            // newsType: ""
        })
        return true;
    }
    return(
        <div 
            className={classes.root}
        >
            <Container>
            <Grid container >
                <Grid item xs={1} sm={1} md={3} lg={3} direction="column"></Grid>
                <Grid item xs ={10} sm={10} md={6} lg={6}>
                <div className="sup-bubble">
                    <div className="sup-arrow sup-bottom right"></div>
                        {currentUser? 
                            <Typography align="right">
                                <h2 className="sup">tell me {currentUserData.username}...suP?</h2>
                            </Typography> 
                        : null}
                        
                        {currentUser ? 
                            <Card 
                                className={classes.cards} 
                                variant="outlined" 
                            >
                            <CardContent>
                            <form 
                                className={classes.root} 
                                noValidate 
                                autoComplete="on" 
                                onSubmit={inputSubmit}
                            >
                                
                                <TextField 
                                    id="outlined-basic" 
                                    label="suP friend?" 
                                    variant="outlined" 
                                    multiline
                                    rows={4}
                                    type="textarea"
                                    name="newsData"
                                    value={newsObj.newsData}
                                    onChange={inputChange}
                                    className={classes.input}
                                    inputProps={{
                                        maxlength: 200
                                    }}
                                    helperText={`${newsObj.newsData.length}/200`}
                                />
                                <Button variant="contained" color="primary" type="submit">
                                    send
                                </Button>
                                {/* TODO: add in newstype to form */}
                                {/* <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">Category</InputLabel>
                                    <Select
                                        native
                                        value={newsObj.newsType}
                                        name="newsType"
                                        onChange={handleChange}
                                        inputProps={{
                                            name: 'category',
                                            id: 'age-native-simple',
                                        }}
                                        >
                                        <option aria-label="None" value="none" />
                                        <option value="Travel">Travel</option>
                                        <option value="Food">Food</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Music">Music</option>
                                        <option value="Misc">Misc</option>
                                    </Select>
                                </FormControl> */}
       
                            </form>
                            </CardContent>
                            </Card>
                            : 
                            <Typography><h3 className={classes.welcome}>...Welcome to suP!</h3> 
                            <form 
                                className={classes.root} 
                                noValidate 
                                autoComplete="on" 
                                onSubmit={inputSubmitLogin}
                            >
                                <Typography align="right">
                                    <h2 className="login">...please login!</h2>
                                </Typography>
                                <TextField 
                                    id="outlined-basic" 
                                    label="username" 
                                    variant="outlined" 
                                    type="textarea"
                                    name="username"
                                    value={loginObj.username}
                                    onChange={inputChangeLogin}
                                    className={classes.input}
                                />
                                <TextField 
                                    id="outlined-basic" 
                                    label="password" 
                                    variant="outlined" 
                                    type="password"
                                    name="password"
                                    value={loginObj.password}
                                    onChange={inputChangeLogin}
                                    className={classes.input}
                                />
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    login
                                </Button>
                                </form>
                            </Typography>
                        }
                        </div>
                    </Grid>                 
                    <Grid item xs={1} sm={1} md={2} lg={2} direction="column"></Grid>
                </Grid>
            </Container>
        </div>
    )
}

           
                     