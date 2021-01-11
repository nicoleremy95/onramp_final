import * as React from 'react'
import {useState, useEffect} from 'react';
import './home.css'
import AppBar from '../../components/Appbar/Appbar';
import News from '../../components/News/News'
import Sup from '../../components/Sup/Sup'
import API from '../../utils/API'
import Scroll from '../../components/Scroll/Scroll'
import Footer from '../../components/Footer/Footer'
import './home.css'

// interface newsDef {
//     //TODO: change type any 
//       newsDB: string,
  
// }
// let myObj = [{size: 10, label: 'hllo' }];

/*function printLabel(labeledObj: ArrayDef) {
    console.log('labeledObj', labeledObj[0].label);
}
printLabel(myObj);*/


export default function Home() {
    // const [newsDB, setNewsDB] = useState([]);
    const [newsDB, setNewsDB] = useState([]);
    //useState<Array<any>>([]);
    // const [newsDB, setNewsDB] = useState<newsDef>();
    // const [newsDB, setNewsDB] = useState<Array<object>>([{}]);
    console.log("FunctionHome")
    useEffect(()=>{
        API.getAllNews()
        .then(res =>{
            console.log('res.data[0].newsCreator', res.data[0].newsCreator)
            console.log('res.data', res.data)
            setNewsDB(res.data);
            console.log('newsDB', newsDB)
        })
        .catch(err => console.log('err', err))
    }, [])
    // const arr:object[] = [];
    // newsDB.map(item=>{
    //     console.log('item', item)
    //     arr.push(
    //         <h1>{item}</h1>
    //     )
    // })
    
    return (
        <div 
            className="Home-container"
        >
            <Scroll showBelow={250}/>
            <AppBar/>
            <Sup/>
            {/* <News {...newsDB}/> */}
            <News newsDB ={newsDB}/>
            <Footer/>
            {/* <div> */}
               {/* {arr.map(news=>{return <h1>{news}</h1>})} */}
            {/* </div> */}
        </div>
    )
}

