import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Gameplay.css";

class Gameplay extends Component {
  render() {
    return (
      <>
        <div id="gameplayWrapper">
          <Container id="gameplayContainer">
            <Row id="gameplayRow">
              <Col id="gameplayCol">
                <div id="gameplayTitle">How To Play:</div>
              </Col>
            </Row>
            <Row id="gameplayParagraphRow">
              <Col id="gameplayParagraphCol">
                <p id="gameplayParagraph">
                  The game begins immediately when the Start button is pressed.
                  When the screen loads, press the New Word button to see a
                  random word. Think of a song that has that random word in its
                  lyrics. Press the red Record button to start recording. While
                  the game is recording, sing the song that has the random word
                  included in the lyrics. Press the red Record button again to
                  turn off the recording session. The green Submit button will
                  then become enabled, allowing the player to submit the song of
                  their choice. Upon submit, the player will then see the song
                  they chose to sing and the songs lyrics, if they are correct.
                  Please speak clearly and loud enough into your microphone
                  while recording. For accuracy, please sing at least 8 words.
                  The more words matched to the lyrics, the more accurate of a
                  result.
                </p>
              </Col>
            </Row>
            <Row id="singlePlayerButtonRow">
              <Col id="singleplayerButtonCol">
                <Link to="/singleplayer">
                  <Button id="singleplayerButton">Single Player Game</Button>
                </Link>
              </Col>
            </Row>
            <Row id="multiPlayerButtonRow">
              <Col id="multiplayerButtonCol">
                <Link to="/multiplayer">
                  <Button id="multiplayerButton" disabled={true}>Multi-Player Game</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Gameplay;
