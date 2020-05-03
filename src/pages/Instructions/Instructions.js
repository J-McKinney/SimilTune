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
                <div id="instructionsTitle">Instructions:</div>
              </Col>
            </Row>
          </Container>
          <Container id="instructionsContainer">
            <Row id="instructionsRow">
              <Col id="instructionsCol">
                <p id="instructionsParagraph">Hello</p>
              </Col>
            </Row>
          </Container>
          <Container id="homeButtonContainer">
            <Row id="homeButtonRow">
              <Col id="homeButtonCol">
                <Link to="/">
                  <Button id="homeButton">Home</Button>
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
