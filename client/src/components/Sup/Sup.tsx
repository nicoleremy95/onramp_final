import * as React from 'react';
import {useState, useEffect} from 'react';
import Input from '@material-ui/core/Input';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import API from '../../utils/API';

interface State {
    newsData: string,
    newsCreator: string,
    newsType: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
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
        newsData: "",
        newsCreator: "",
        newsType: ""
    })

    //input change function
    function inputChange (e: React.ChangeEvent<HTMLTextAreaElement>){
        //TODO: refactor any
        const{name, value}: any = e.target;
        setNewsObj({ ...newsObj, [name]: value })
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
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={inputSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="suP friend?" 
                    variant="outlined" 
                    multiline
                    rows={4}
                    type="textarea"
                    onChange={inputChange}
                    value={newsObj.newsData}
                />
                <TextField 
                    id="outlined-basic" 
                    label="name" 
                    variant="outlined" 
                    rows={4}
                    required= {true}
                    type="textarea"
                    onChange={inputChange}
                    value={newsObj.newsCreator}
                />
                <TextField 
                    id="outlined-basic" 
                    label="type" 
                    variant="outlined" 
                    rows={4}
                    type="textarea"
                    onChange={inputChange}
                    value={newsObj.newsType}
                />
                 <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                >
                    Send
                </Button>
                
            </form>
        </div>
    )
}