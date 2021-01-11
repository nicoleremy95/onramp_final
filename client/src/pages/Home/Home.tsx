import * as React from 'react'
import {useState, useEffect} from 'react';
import './home.css'
import AppBar from '../../components/Appbar/Appbar';
import News from '../../components/News/News'
import Sup from '../../components/Sup/Sup'
import App from '../../App';
import API from '../../utils/API'
import Scroll from '../../components/Scroll/Scroll'
import Footer from '../../components/Footer/Footer'
import './home.css'

interface currentUserProps {
    currentUser: boolean
}
// export default function Home() {
export default function Home({currentUser}: currentUserProps) {
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
            className="Home-container"
        >
            <Scroll showBelow={250}/>
            {/* <AppBar /> */}
            <AppBar currentUser={currentUser}/>
            <Sup/>
            <News newsDB ={newsDB}/>
            <Footer/>
        </div>
    )
}

