import * as React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Login from './pages/Login/Login'
import './App.css';
import API from './utils/API';


// interface userData {
//   username: string,
//   email: string
// }

function App(){
  const [currentUser, setCurrentUser] = useState<boolean>(true);

  const [currentUserData, setCurrentUserData] = useState<any>({
    username: '',
    email: ''
  });

  useEffect(()=>{
    API.getCurrentUser()
    .then(res => {
          // console.log('app.tsx res.data.user.email', res.data.user.email)
          if(!res.data.user){
            setCurrentUser(false);
          } else {
            // const sessionUser = res.data.user;
            setCurrentUser(true);
            setCurrentUserData({
              username: res.data.user.username,
              email: res.data.user.email
            })
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
            <Home currentUser={currentUser} currentUserData={currentUserData}/>
          </Route>
          <Route exact path = '/user'>
            <User currentUser={currentUser} currentUserData={currentUserData}/>
          </Route>
          <Route exact path = '/login'>
            <Login currentUser={currentUser} currentUserData={currentUserData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
