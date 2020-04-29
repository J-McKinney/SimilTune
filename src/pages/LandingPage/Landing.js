import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Landing.css";

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

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.Listening = this.Listening.bind(this);
  }

  componentDidMount() {
    // console.log(audioContext);
  }
  componentDidUpdate() {
    audioContext.resume();
    // console.log(context);
  }

  Listening = () => {
    if (!audioContext) {
      audioContext = new AudioContext();
    }
    audioContext.resume();
    // context.resume().then(() => {
    console.log("Playback resumed successfully");
    // });
  };

  render() {
    return (
      <>
        <div id="landingWrapper">
          <Container id="titleContainer">
            <Row id="titleRow">
              <Col id="titleCol">
                <div id="title">
                  <h1>SimilTune</h1>
                </div>
                {/*<h1 id="title"><Fade>SimilTune</Fade></h1>*/}
              </Col>
            </Row>
          </Container>

          <Container id="infoContainer">
            <Row id="infoRow">
              <Col id="instructionsCol">
                <Link to="/instructions">
                  <Button id="instructionsButton">Instructions</Button>
                </Link>
              </Col>
              <Col id="licenseCol">
                <Link to="/license">
                  <Button id="licenseButton">License</Button>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container id="startContainer">
            <Row id="startRow">
              <Col id="startCol">
                <Link to="/game">
                  <Button id="startButton" onClick={this.Listening}>
                    <h2>
                      <i id="iTunesNote" className="fab fa-itunes-note"></i>
                      &nbsp; &nbsp; Start &nbsp; &nbsp;
                      <i id="iTunesNote" className="fab fa-itunes-note"></i>
                    </h2>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Landing;
