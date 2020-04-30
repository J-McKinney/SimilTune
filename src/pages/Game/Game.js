import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
let randomWordArr = ["Incredible"];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "",
      lyrics: "",
      track: "",
      artist: "",
      album: "",
      url: "",
      trackID: "",
      songLyrics: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
    this.randomWordGenerator = this.randomWordGenerator.bind(this);
  }
  componentDidMount() {
    recognition.stop();
  }
  componentDidUpdate() {
    console.log();
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

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
      this.setState({
        lyrics: this.state.sentence.split(" ").join("%20") + "",
      });
    };
    recognition.onerror = (event) => {
      event.preventDefault();
      console.log("Error occurred in recognition: " + event.error);
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({
    //   lyrics: "",
    // });
    const MUSIX_API_ARTIST_INFO =
      MUSIX_API_ROOT +
      "track.search?q_lyrics=" +
      this.state.lyrics +
      // changing the &page_size=1 to any other number will add other tracks to the json list
      // changing &page=1 to any other number will add more info to single tracks on the json list
      "&page_size=1&page=1&s_track_rating=desc&apikey=" +
      process.env.REACT_APP_MM_KEY;
    axios
      .get(CORS + MUSIX_API_ARTIST_INFO)
      .then((response) => {
        console.log(response);
        this.setState({
          track: response.data.message.body.track_list[0].track.track_name,
          artist: response.data.message.body.track_list[0].track.artist_name,
          album: response.data.message.body.track_list[0].track.album_name,
          url: response.data.message.body.track_list[0].track.track_share_url,
          trackID: response.data.message.body.track_list[0].track.track_id,
        });
        const MUSIX_API_SONG_LYRICS =
          MUSIX_API_ROOT +
          "track.lyrics.get?track_id=" +
          this.state.trackID +
          "&apikey=" +
          process.env.REACT_APP_MM_KEY;
        return axios.get(CORS + MUSIX_API_SONG_LYRICS);
      })
      .then((response) => {
        console.log(response);
        this.setState({
          songLyrics: response.data.message.body.lyrics.lyrics_body,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  resetTranscripts(e) {
    e.preventDefault();
    document.getElementById("interimTranscript").innerHTML = interimTranscript =
      "";
    document.getElementById("finalTranscript").innerHTML = finalTranscript = "";
  }

  randomWordGenerator(e) {
    e.preventDefault();
    var randomWord = Math.floor(Math.random() * randomWordArr.length);
    var word = randomWordArr[randomWord];
    document.getElementById("randomWordPlacement").innerHTML = word;
  }

  render() {
    // const { track, artist, album, url } = this.state;
    return (
      <>
        <div id="speechWrapper">
          <Container id="exitContainer">
            <Link to="/">
              <Button id="exitButton" className="rounded-right">
                <h6 id="close">&times;</h6>
              </Button>
            </Link>
          </Container>

          <Container id="randomWordContainer">
            <Row id="randomWordRow">
              <Col id="randomWordCol">
                <div id="randomWordPlacement">
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row id="randomWordButtonRow">
              {/* change onClick laptop/desktop to onTouchStart mobile */}
              <Button id="randomWordButton" onClick={this.randomWordGenerator}>
                <div id="newWordText">NewWord/Timer</div>
              </Button>
            </Row>
          </Container>
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
                  <i id="favIcon" className="far fa-stop-circle" />
                </Button>
              </Col>
              <Col>
                <Button id="resetButton" onClick={this.resetTranscripts}>
                  <i id="favIcon" className="fas fa-undo" />
                </Button>
              </Col>
              <Col>
                <Button
                  id="submitButton"
                  type="submit"
                  disabled={!this.state.lyrics}
                  value={this.state.sentence}
                  onClick={this.handleSubmit}
                >
                  <i id="favIcon" className="far fa-thumbs-up" />
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
