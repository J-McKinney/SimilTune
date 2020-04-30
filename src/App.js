import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Gameplay from "./pages/Gameplay/Gameplay";
import Instructions from "./pages/Instructions/Instructions";
import License from "./pages/License/License";
import Game from "./pages/Game/Game";
import ErrorPage from "./pages/ErrorPage/Error";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/gameplay" component={Gameplay} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/license" component={License} />
        <Route exact path="/game" component={Game} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
