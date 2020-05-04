import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./License.css";

class License extends Component {
  render() {
    return (
      <>
        <div id="licenseWrapper">
          <Container>
            <Row>
              <Col>
                <div id="licenseAgreement">License Agreement:</div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default License;
