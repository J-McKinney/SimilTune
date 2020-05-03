import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Instructions.css";

class Instructions extends Component {
  render() {
    return (
      <>
        <div id="instructionsWrapper">
          <Container id="instructionsTitleContainer">
            <Row id="instructionsTitleRow">
              <Col id="instructionsTitleCol">
                <div id="instructionsPageTitle">Instructions:</div>
              </Col>
            </Row>
            <Row id="instructionsRow">
              <Col id="instructionsCol">
                <p id="instructionsParagraph">
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
            <Row id="homeButtonRow">
              <Col id="homeButtonCol">
                <Link to="/">
                  <Button id="homeButton">Back</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Instructions;
