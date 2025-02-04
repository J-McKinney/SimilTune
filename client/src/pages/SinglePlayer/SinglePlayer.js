import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./SinglePlayer.css";
require("dotenv").config();

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

//////////////////////////////////////////////////////////////////////////////////////////////////
// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var audioContext = new AudioContext();
////////////////////////////////////////////////////////////////////////////////////////////////////

recognition.continous = true;
recognition.maxAlternatives = 10;
recognition.interimResults = true;
recognition.lang = "en-US";
let finalTranscript = "";
let interimTranscript = "";
const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";
const CORS = "https://corsanywhere.herokuapp.com/";
// const CORS = "https://cors-anywhere.herokuapp.com/";
// const CORS = "https://cors.bridged.cc/";
var word;
var checkSentence;
var wordToMatch;
let randomWordArr = [
  "LIGHT",
  // "TRUE",
  // "NIGHT",
  // "SWEET",
  // "DREAM",
  // "WORK",
  // "PHONE",
  // "ONE",
  // "LATE",
  // "GOOD",
  // "FOREVER",
  // "RAINBOW",
  // "DANGER",
  // "QUEEN",
  // "HAIR",
  // "LIGHT",
  // "HEART",
  // "NAME",
  // "DEEP",
  // "AGAIN",
  // "WORLD",
  // "GIRL",
  // "BEST",
  // "LOST",
  // "TROUBLE",
  // "BURN",
  // "WAR",
  // "SLOW",
  // "RING",
  // "CREAM",
  // "NEED",
  // "HOLD",
  // "GOD",
  // "TOGETHER",
  // "FREEDOM",
  // "FALL",
  // "THINK",
  // "BROKE",
  // "MINE",
  // "BOY",
  // "NEVER",
  // "KISS",
  // "WINE",
  // "GIRL",
  // "BAD",
  // "HURT",
  // "REMEMBER",
  // "ONLY",
  // "PERFECT",
  // "WANT",
  // "CONTROL",
  // "BLANK",
  // "LIAR",
  // "READY",
  // "INSIDE",
  // "EYE",
  // "DEAD",
  // "BLOOD",
  // "PROUD",
  // "MAD",
  // "LAST",
  // "MAN",
  // "YOUNG",
  // "ALONE",
  // "RAIN",
  // "QUIT",
  // "FRIEND",
  // "SONG",
  // "LISTEN",
  // "FEEL",
  // "NEVER",
  // "HOME",
  // "JUMP",
  // "WILD",
  // "ANGEL",
  // "TOUCH",
  // "HEAD",
];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listening: true,
      sentence: "",
      lyrics: "",
      track: "",
      artist: "",
      album: "",
      url: "",
      trackID: "",
      availableTracks: "",
      songLyrics: "",
      randomWordColor: { color: "#ffffff" },
      clockRunning: false,
      minutes: 30,
      seconds: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.randomWordGenerator = this.randomWordGenerator.bind(this);
  }
  componentDidMount() {
    recognition.stop();
    this.startTimer();
    this.setState({ clockRunning: true });
    // var context = new AudioContext();
    // context.resume();
  }

  componentDidUpdate() {
    console.log(this.state.sentence);
  }

  componentWillUnmount() {
    // recognition.stop();
    this.stopTimer();
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
      // audioContext.start()
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
      document.getElementById("interimTranscript").innerHTML =
        interimTranscript;
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
    checkSentence = this.state.sentence.toUpperCase();
    wordToMatch = checkSentence.includes(word);
    if (wordToMatch === true) {
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
          this.setState({
            track: response.data.message.body.track_list[0].track.track_name,
            artist: response.data.message.body.track_list[0].track.artist_name,
            album: response.data.message.body.track_list[0].track.album_name,
            url: response.data.message.body.track_list[0].track.track_share_url,
            trackID: response.data.message.body.track_list[0].track.track_id,
            availableTracks: response.data.message.header.available,
          });
          console.log(this.state.track);
          console.log(this.state.artist);
          console.log(this.state.album);
          console.log(this.state.availableTracks);
          const MUSIX_API_SONG_LYRICS =
            MUSIX_API_ROOT +
            "track.lyrics.get?track_id=" +
            this.state.trackID +
            "&apikey=" +
            process.env.REACT_APP_MM_KEY;
          return axios.get(CORS + MUSIX_API_SONG_LYRICS);
        })
        .then((response) => {
          this.setState({
            songLyrics: response.data.message.body.lyrics.lyrics_body,
          });
          console.log(this.state.songLyrics);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("The word needs to be in the lyrics you just sang.");
    }
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
    word = randomWordArr[randomWord];
    document.getElementById("randomWordPlacement").innerHTML = word;
    this.setState({
      track: "",
      artist: "",
      album: "",
      url: "",
      trackID: "",
      availableTracks: "",
      songLyrics: "",
    });
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          this.setState({ clockRunning: false });
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <>
        <div id="speechWrapper">
          <Container fluid id="exitContainer">
            <div id="timer">
              {minutes === 0 && seconds === 0 ? (
                <div id="timer">Time's Up!</div>
              ) : (
                <div id="timer">
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>
              )}
            </div>
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
          <Container id="randomWordButtonContainer">
            <Row id="randomWordButtonRow">
              <Button
                id="randomWordButton"
                disabled={!this.state.clockRunning}
                onClick={this.randomWordGenerator}
              >
                <div id="newWordText">New Word</div>
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
                <Button
                  id="recordButton"
                  disabled={!this.state.clockRunning}
                  onClick={this.toggleListen}
                >
                  <i id="favIcon" className="far fa-stop-circle" />
                </Button>
              </Col>
              <Col>
                <Button
                  id="resetButton"
                  disabled={!this.state.clockRunning}
                  onClick={this.resetTranscripts}
                >
                  <i id="favIcon" className="fas fa-undo" />
                </Button>
              </Col>
              <Col>
                <Button
                  id="submitButton"
                  type="submit"
                  // if the length of this.state.sentence is too short button is disabled
                  // disabled={this.state.sentence.length <= 33}
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
