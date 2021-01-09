import * as React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './home.css'
import AppBar from '../components/Appbar/Appbar';
import News from '../components/News/News'
import Sup from '../components/Sup/Sup'
import API from '../utils/API'
import './home.css'

export default function Home() {
    const [newsDB, setNewsDB] = useState<Array<object>>([]);

    useEffect(()=>{
        API.getAllNews()
        .then(res =>{
            const newsArr = res.data;
            console.log('newsData', res.data)
            setNewsDB(newsArr);
        })
        .catch(err => console.log('err', err))
    }
    // , [newsDB]
    )
    const arr:object[] = [];
    newsDB.map(item=>{
        console.log('item', item)
        arr.push(
            <h1>{item}</h1>
        )
    })
    
    return (
        <div className="Home">
            <AppBar/>
            <Sup/>
            <News newsDB={newsDB} />
            <div>
               {arr.map(news=>{return <h1>{news}</h1>})}
            </div>
        </div>
    )
}

