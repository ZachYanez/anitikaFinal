import React from 'react';
import './App.css';
import Home from './pages/Home'
import Corp from './pages/Corp'
import Fashion from './pages/Fashion'
import Fitness from './pages/Fitness';
import Headshots from './pages/Headshots'
import Published from './pages/Published'
import Videos from './pages/Videos'
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
        <Route exact path="/fitness" component={Fitness}>
            <Fitness />
        </Route>
        <Route exact path="/videos" component={Videos}>
            <Videos />
        </Route>
        <Route exact path="/headshots" component={Headshots}>
            <Headshots/>
        </Route>
        <Route exact path="/published" component={Published}>
            <Published/>
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
