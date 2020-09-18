import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home'
import Saved from './pages/Saved'

function App() {

  return (
  <>
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/saved">Saved</Link>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/' component={Saved}></Route>
        </Switch>
      </nav>
    </div>
  </Router>
  </>
  );
}

export default App;
