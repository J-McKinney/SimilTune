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
                  You will have 3 minutes to match as many random words with
                  song lyrics as you can. The random word must be included in
                  the sentence you are singing. Press the red Record button to
                  start recording. Speak clearly and loud enough for your
                  microphone to record you. Then, press the Record button again
                  to stop recording. The Submit button will then become enabled,
                  allowing you to submit the song of your choice. The random
                  word will turn green if it has a match or red if it doesn't.
                  For accuracy, please sing at least 8 words or more. The more
                  words matched to the lyrics, the more accurate of a result.
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
                  <Button id="multiplayerButton" disabled={true}>
                    Multi-Player Game
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

export default Gameplay;
