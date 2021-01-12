import * as React from 'react';
import {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '../../components/Appbar/Appbar';
import News from '../../components/News/News';
import Sup from '../../components/Sup/Sup';
import API from '../../utils/API';
import Scroll from '../../components/Scroll/Scroll';
import Footer from '../../components/Footer/Footer';

interface currentUserProps {
    currentUser: boolean
    currentUserData: any
}

const useStyles = makeStyles((theme: Theme)=>
    createStyles({
        homeContainer: {
            backgroundImage: "linear-gradient(to bottom right, white, #d2a295);"
        }
    })
)


// export default function Home() {
export default function Home({currentUser, currentUserData}: currentUserProps) {
    const classes = useStyles();

    console.log('Home.tsx currentUserData', currentUserData)
    const [newsDB, setNewsDB] = useState([]);
    
    // console.log("FunctionHome")
    // console.log('home tsx currentUser.username', currentUser.username)

    //TODO: move to app.tsx and pass down with props 
    useEffect(()=>{
        API.getAllNews()
        .then(res =>{
            // console.log('res.data[0].newsCreator', res.data[0].newsCreator)
            // console.log('res.data', res.data)
            setNewsDB(res.data);
            // console.log('newsDB', newsDB)
        })
        .catch(err => console.log('err', err))
    }, [])
   
    return (
        <div 
            className={classes.homeContainer}
        >
            <Scroll showBelow={250}/>
            {/* <AppBar /> */}
            <AppBar currentUser={currentUser} currentUserData={currentUserData}/>
            <Sup/>
            <News newsDB ={newsDB} />
            <Footer/>
        </div>
    )
}

