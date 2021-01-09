import * as React from 'react';
import {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/API';
import './sup.css'

interface State {
    newsData: string,
    newsCreator: string,
    newsType: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto'

    },
    root: {
      '& > *': {
        marginTop: '100px'
      },
    },
    input: {
        '& > *': {
            background: 'white',
        },
        width: "100%"
    },
    button: {
        margin: theme.spacing(1),
    },
  }),
);


export default function Sup(){
    const classes = useStyles();

    //initialize form object state
    const [newsObj, setNewsObj] = useState<State>({
        newsData:"",
        newsCreator:"",
        newsType:""
    })

    //input change function
    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>){
        //TODO: refactor any
        const{ name, value}: any = e.target;
        setNewsObj({ ...newsObj,[name]: value})
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
    return(
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={2} md={2} lg={3}></Grid>
                <Grid item xs={8} md={8} lg={6}>
                <form className={classes.root} noValidate autoComplete="on" onSubmit={inputSubmit}>
                <div>
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
                    <TextField 
                        id="outlined-basic" 
                        label="name" 
                        variant="outlined" 
                        required= {true}
                        type="textarea"
                        name="newsCreator"
                        value={newsObj.newsCreator}
                        onChange={inputChange}
                        className={classes.input}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="type" 
                        variant="outlined" 
                        type="textarea"
                        name="newsType"
                        value={newsObj.newsType}
                        onChange={inputChange}
                        className={classes.input}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                    >
                        Send
                    </Button>
                </div>
            </form>
                </Grid>
                <Grid item xs={2} md={2} lg={4}></Grid>
            </Grid>
        </div>
    )
}