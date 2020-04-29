import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Fade from "react-reveal/Fade";
import "./Error.css";

class Error extends Component {
  render() {
    return (
      <>
        <div id="errorWrapper">
          <Container id="eCon">
            <Row id="eRow">
              <Col id="eCol">
                <div id="eh1">ERROR 1203499C0005ƆB</div>
              </Col>
            </Row>

            <Row id="eRow">
              <div id="eh2">
                Wellp, now you did it. Broke the damn computer. You probably
                didn't even do anything major, did you? But see, I'm the dreaded
                Blue Screen of Death, and I pop up totally randomly, and most
                times, for no good gah-darn reason.
              </div>
            </Row>

            <Row id="eRow">
              <div id="eh2">
                You're probably sweatin' bullets right now, aren't you? I love
                it. So, there are a couple options you could try, neither of
                which will work whatsoever, but heck, be my guest.
              </div>
            </Row>

            <Row id="eRow">
              <ul>
                <li>
                  <div id="eh2">
                    Hit CTRL+ALT+DEL. This will restart me. But, everything
                    you've done on me up until this point will be gone. Tough
                    CRUD. But if you're into downloading weird online GIF's
                    (which you are), I'm guessing this isn't a terrible option.
                    Pervert.
                  </div>
                </li>
                <br />
                <li>
                  <div id="eh2">
                    Don't hit CTRL+ALT+DEL and get on the phone with every
                    computer repair guy in town. All of 'em. Give'em all a shot.
                    It's fine. I'll wait. I ain't going anywhere. I can stay
                    like this alllllllllll daaaaaaaayyyyyyyy...
                  </div>
                </li>
              </ul>
            </Row>

            <Row>
              <Link to="/">
                <Button id="eHomeButton">Home</Button>
              </Link>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Error;
