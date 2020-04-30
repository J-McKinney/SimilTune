import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Landing.css";

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.Listening = this.Listening.bind(this);
  }

  componentDidMount() {
    console.log();
  }
  componentDidUpdate() {
    audioContext.resume();
  }

  Listening = () => {
    if (!audioContext) {
      audioContext = new AudioContext();
    }
    audioContext.resume();
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
