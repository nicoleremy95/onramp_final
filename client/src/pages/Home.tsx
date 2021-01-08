import * as React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './home.css'
import AppBar from '../components/Appbar/Appbar';
import News from '../components/News/News'
import API from '../utils/API'

export default function Home() {
    const [news, setNews] = useState({
        newsData: "",
        newsCreator: "",
        type: ""
    });
    const [comments, setComments] = useState<string>();
    const [reactions, setReactions] = useState<string>();
    // const { id } = useParams<object>();

    // useEffect(()=>{
    //     API.getAllNews.then(res =>{
    //         const newsArr = res.data;
    //         setNews(newsArr);
    //     })
    // }, [news])

    useEffect(()=>{
        
    })

    return (
        <div>
           <AppBar/>
           {/* <News news={news}/> */}
        </div>
    )
}

