import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Gameplay from "./pages/Gameplay/Gameplay";
import Instructions from "./pages/Instructions/Instructions";
import License from "./pages/License/License";
import SinglePlayer from "./pages/SinglePlayer/SinglePlayer";
import MultiPlayer from "./pages/MultiPlayer/MultiPlayer";
import ErrorPage from "./pages/ErrorPage/Error";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/gameplay" component={Gameplay} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/license" component={License} />
        <Route path="/singleplayer" component={SinglePlayer} />
        <Route path="/multiplayer" component={MultiPlayer} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
