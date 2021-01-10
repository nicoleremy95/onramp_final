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

    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>){
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setNewsObj({ ...newsObj,[name]: value})
        // setIcon(true)
    }

    // input submit function
    function inputSubmit (e: React.FormEvent<HTMLFormElement>) {
        API.postNews(newsObj)
        .then(news =>{
            console.log('news', news)
        })
        .catch(err =>console.log('err', err))
        setNewsObj({
            newsData: "",
            newsCreator: "",
            newsType: ""
        })
    }

    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={1} md={3} lg={3} direction="column"></Grid>
                    <Grid item xs ={10} md={6} lg={6}>
                        <div className="user-bubble">
                            <div className="user-bubble user-bottom right">
                            <form 
                            // className={classes.root} 
                                noValidate 
                                autoComplete="on" 
                                onSubmit={inputSubmit}
                            >
                                <Typography align="right">
                                    <h2 className="sup">tell me...suP?</h2>
                                </Typography>
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
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton className={classes.send}>
                                                <SendIcon/>
                                            </IconButton>

                                        )
                                    
                                    }}
                                />
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">Category</InputLabel>
                                    <Select
                                        native
                                        value={state.age}
                                        onChange={handleChange}
                                        inputProps={{
                                            name: 'category',
                                            id: 'age-native-simple',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Travel</option>
                                        <option value={20}>Food</option>
                                        <option value={30}>Entertainment</option>
                                        <option value={30}>Fashion</option>
                                        <option value={30}>Sports</option>
                                        <option value={30}>Music</option>
                                        <option value={30}>Misc</option>
                                    </Select>
                                </FormControl>
                                            
                        </form>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={1} md={2} lg={2} direction="column"></Grid>
                </Grid>
            </Container>
        </div>
    )
}

