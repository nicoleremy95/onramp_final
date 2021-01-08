import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './home.css'
import AppBar from '../components/Appbar/Appbar';
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

    useEffect(()=>{

    })

    return (
        <div>
           <AppBar/>
        </div>
    )
}

