import React, { Component } from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Game.css";
require("dotenv").config();

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.continous = true;
recognition.maxAlternatives = 10;
recognition.interimResults = true;
recognition.lang = "en-US";
let finalTranscript = "";
let interimTranscript = "";
const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";
const CORS = "https://cors-anywhere.herokuapp.com/";
const APIKEY = "03b6aef760aae79c400fed78ed0398f8";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "",
      lyrics: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
  }
  componentDidUpdate() {
    // console.log(this.state.sentence);
    console.log(this.state.lyrics);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    // console.log("Meow");
    this.setState({ lyrics: this.state.sentence.split(" ").join("%20") + "" });
  }

  toggleListen = () => {
    this.setState(
      {
        listening: !this.state.listening,
      },
      this.handleListen
    );
  };

  handleListen = () => {
    if (this.state.listening) {
      recognition.start();
      recognition.onend = () => {
        recognition.start();
      };
    } else {
      recognition.stop();
      recognition.onend = () => {};
    }
    finalTranscript = "";
    recognition.onresult = (event) => {
      interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else interimTranscript += transcript;
      }
      document.getElementById(
        "interimTranscript"
      ).innerHTML = interimTranscript;
      document.getElementById("finalTranscript").innerHTML = finalTranscript;
      const transcriptArr = finalTranscript.split("  ");
      this.setState({ sentence: transcriptArr[0] });
    };
    recognition.onerror = (event) => {
      event.preventDefault();
      console.log("Error occurred in recognition: " + event.error);
    };
  };

  resetTranscripts() {
    document.getElementById("interimTranscript").innerHTML = interimTranscript =
      "";
    document.getElementById("finalTranscript").innerHTML = finalTranscript = "";
  }

  render() {
    return (
      <>
        <div id="speechWrapper">
          <Container id="finalTranscriptContainer">
            <div id="interimTranscript"></div>
            <div
              id="finalTranscript"
              value={this.state.sentence}
              onChange={this.handleChange}
            >
              <br />
            </div>
          </Container>

          <Container id="buttonContainer">
            <Row id="buttonRow">
              <Col>
                <Button id="recordButton" onClick={this.toggleListen}>
                  <i id="favIcon" className="far fa-stop-circle"></i>
                </Button>
              </Col>
              <Col>
                <Button id="resetButton" onClick={this.resetTranscripts}>
                  <i id="favIcon" className="fas fa-undo"></i>
                </Button>
              </Col>
              <Col>
                <Button
                  id="submitButton"
                  type="submit"
                  value={this.state.sentence}
                  onClick={this.handleSubmit}
                >
                  <i id="favIcon" className="far fa-thumbs-up"></i>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Game;
