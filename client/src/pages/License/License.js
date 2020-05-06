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
          <Container id="licenseAgreementContainer">
            <Row id="licenseAgreementRow">
              <Col id="licenseAgreementCol">
                <div id="licenseAgreement">License Agreement:</div>
              </Col>
            </Row>
            <Row id="licenseAgreementParagraphRow">
              <Col id="licenseAgreementParagraphCol">
                <p id="licenseAgreementParagraph1">Owner and Creater:</p>
                <p id="licenseAgreementParagraph2">Jesse McKinney</p>
              </Col>
            </Row>
            <Row id="licenseAgreementHomeButtonRow">
              <Col id="licenseAgreementHomeButtonCol">
                <Link to="/">
                  <Button id="licenseAgreementHomeButton">Back</Button>
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
