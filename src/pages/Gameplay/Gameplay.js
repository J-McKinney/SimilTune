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
          <Container>
            <Row>
              <Col>
                <div id="gameplayTitle">How To Play:</div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <Link to="/game">
                  <Button>Start The Game</Button>
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
