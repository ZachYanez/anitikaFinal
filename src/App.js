import React from 'react';
import './App.css';
import Home from './pages/Home'
import Corporate from './pages/Corporate'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home}>
            <Home />
        </Route>
        <Route exact path="/" component={Corporate}>
            <Corporate />
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
