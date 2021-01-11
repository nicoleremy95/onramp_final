import * as React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Login from './pages/Login/Login'
import './App.css';
import API from './utils/API';

function App(){
  const [currentUser, setCurrentUser] = useState<boolean>(true)

  useEffect(()=>{
    API.getCurrentUser()
    .then(res => {
          console.log('app.tsx res.data.user', res.data.user)
          if(!res.data.user){
            setCurrentUser(false)
          } else {
            setCurrentUser(true)
          }

    })
    // .then(res=>{
    //   // console.log('res.data current user', res.data)
    //   setCurrentUser(res.data.user)
    //   console.log('app.tsx currentUser', currentUser)
    // })
  }, [])
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home currentUser={currentUser}/>
          </Route>
          <Route exact path = '/user'>
            <User currentUser={currentUser}/>
          </Route>
          <Route exact path = '/login'>
            <Login currentUser={currentUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
