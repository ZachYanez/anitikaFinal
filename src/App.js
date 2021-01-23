import React from 'react';
import './App.css';
import Home from './pages/Home'
import Corp from './pages/Corp'
import Fashion from './pages/Fashion'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home}>
            <Home />
        </Route>
        <Route exact path="/corp" component={Corp}>
            <Corp />
        </Route>
        <Route exact path="/fashion" component={Fashion}>
            <Fashion />
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
