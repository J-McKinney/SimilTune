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
                <p id="gameplayParagraph"></p>
              </Col>
            </Row>
            <Row id="playerButtonRow">
              <Col id="singleplayerButtonCol">
                <Link to="/singleplayer">
                  <Button id="singleplayerButton">Single Player Game</Button>
                </Link>
              </Col>
              <Col id="multiplayerButtonCol">
                <Link to="/multiplayer">
                  <Button id="multiplayerButton">Multi-Player Game</Button>
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
