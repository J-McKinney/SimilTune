import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./MultiPlayer.css";

class MultiPlayer extends Component {
  render() {
    return (
      <>
        <div id="multiplayerWrapper">
          <Container id="multiplayerTitleContainer">
            <Row id="multiplayerTitleRow">
              <Col id="multiplayerTitleCol">
                <div id="multiplayerTitle">Coming Soon!!!</div>
              </Col>
            </Row>
          </Container>
          <Container id="multiplayerHomeButtonContainer">
            <Row id="multiplayerHomeButtonRow">
              <Col id="multiplayerHomeButtonCol">
                <Link to="/">
                  <Button id="multiplayerTitleHomeButton">Back</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default MultiPlayer;
