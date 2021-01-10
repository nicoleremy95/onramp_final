import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'
import User from './pages/User/User'
import './App.css';

function App(){
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route exact path = '/user'>
            <User/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
