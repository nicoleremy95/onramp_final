import * as React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './home.css'
import AppBar from '../components/Appbar/Appbar';
import News from '../components/News/News'
import Sup from '../components/Sup/Sup'
import API from '../utils/API'

export default function Home() {
    const [newsData, setNewsData] = useState<Array<object>>([]);

    useEffect(()=>{
        API.getAllNews().then(news =>{
            const newsArr = news.data;
            setNewsData(newsArr);
        })
        .catch(err => console.log('err', err))
    }, [newsData])

    return (
        <div>
           <AppBar/>
           <Sup/>
           <News newsData={newsData} />
        </div>
    )
}

