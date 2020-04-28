import React, { Component } from "react";
// import axios from "axios";
import "./Game.css";

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.continous = true;
recognition.maxAlternatives = 10;
recognition.interimResults = true;
const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";
const CORS = "https://cors-anywhere.herokuapp.com/";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "",
      lyrics: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default Game;
