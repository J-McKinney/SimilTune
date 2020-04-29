import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
// import Gameplay from "./pages/Gameplay/Gameplay";
import Instructions from "./pages/Instructions/Instructions";
import License from "./pages/License/License";
import Game from "./pages/Game/Game";
import ErrorPage from "./pages/ErrorPage/Error";
import "./App.css";
require("dotenv").config();

// var context;

// window.onload = function () {
//   context = new AudioContext();
//   // Setup all nodes
//   console.log(context.state);
// };

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   console.log("getUserMedia supported.");
//   navigator.mediaDevices
//     .getUserMedia(
//       // constraints - only audio needed for this app
//       {
//         audio: true,
//       }
//     )
//     // Success callback
//     .then(function (stream) {})
//     // Error callback
//     .catch(function (err) {
//       console.log("The following getUserMedia error occured: " + err);
//     });
// } else {
//   console.log("getUserMedia not supported on your browser!");
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/license" component={License} />
        <Route exact path="/game" component={Game} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
