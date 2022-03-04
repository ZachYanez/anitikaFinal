import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
// import Corp from "./pages/Corp";
// import Fashion from "./pages/Fashion";
// import Fitness from "./pages/Fitness";
// import Nothing from "./pages/Nothing";
import Lifestyle from "./pages/Lifestyle";
import Headshots from "./pages/Headshots";
import Kayden from "./pages/Kayden";
import Printwork from "./pages/Printwork";
// import Videos from "./pages/Videos";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/bio" component={Bio}>
            <Bio />
          </Route>
          <Route exact path="/lifestyle" component={Lifestyle}>
            <Lifestyle />
          </Route>
          <Route exact path="/headshots" component={Headshots}>
            <Headshots />
          </Route>
          <Route exact path="/printwork" component={Printwork}>
            <Printwork />
          </Route>
          <Route exact path="/kayden" component={Kayden}>
            <Kayden />
          </Route>
          {/* <Route exact path="/corp" component={Corp}>
            <Corp />
        </Route> */}
          {/* <Route exact path="/fashion" component={Fashion}>
            <Fashion />
        </Route> */}
          {/* <Route exact path="/fitness" component={Fitness}>
            <Fitness />
        </Route> */}
          {/* <Route exact path="/videos" component={Videos}>
            <Videos />
        </Route> */}
          {/* <Route exact path="/nothing" component={Nothing}>
            <Nothing/>
        </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
