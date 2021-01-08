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
    const [newsForm, setNewsForm] = useState({
        newsData: "",
        newsCreator: "",
        newsType: ""
    })

    const inputChange =(e: React.FormEvent<HTMLInputElement>) =>{
        const{name, value}: any = e.target;
        setNewsForm({...newsForm, [name]:value})
    }
    const inputSubmit =(e: React.FormEvent<HTMLInputElement>) =>{
        API.postNews(newsForm)
        .then(news =>{
            console.log('news', news)
        })
        .catch(err =>console.log('err', err))
        setNewsForm({
            newsData: "",
            newsCreator: "",
            newsType: ""
        })
    }
    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="suP friend?" 
                    variant="outlined" 
                    multiline
                    rows={4}
                    // onChange={inputChange}
                    //value
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