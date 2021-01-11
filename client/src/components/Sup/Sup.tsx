import * as React from 'react';
import {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Container from '@material-ui/core/Container';
import API from '../../utils/API';
import { Typography } from '@material-ui/core';
import './sup.css'

interface State {
    newsData: string,
    //TODO: add in newstype in form
    // newsType: string,
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


export default function Sup(){
    const classes = useStyles();

    //initialize form object state
    const [newsObj, setNewsObj] = useState<State>({
        newsData:"",
        // newsCreator:"",
        // newsType:""
    })

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

    //input change function
    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>) {
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setNewsObj({ ...newsObj,[name]: value})
        // setIcon(true)
    }

    // input submit function
    function inputSubmit (e: React.FormEvent<HTMLFormElement>) : boolean { 
        e.preventDefault();        
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
                <Grid item xs={1} md={3} lg={3} direction="column"></Grid>
                <Grid item xs ={10} md={6} lg={6}>
                <div className="sup-bubble">
                    <div className="sup-arrow sup-bottom right"></div>
                        <form 
                            // className={classes.root} 
                                noValidate 
                                autoComplete="on" 
                                onClick={inputSubmit}
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
                        </div>
                    </Grid>                 
                    <Grid item xs={1} md={2} lg={2} direction="column"></Grid>
                </Grid>
            </Container>
        </div>
    )
}

           
                     