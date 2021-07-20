
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import yt from "../../assets/img/icons/common/youtube.png";
import ig from "../../assets/img/icons/common/ig.png";
import fb from "../../assets/img/icons/common/fb.png";
import twitter from "../../assets/img/icons/common/twitter.png";
import substack from "../../assets/img/icons/common/substack.png";
import patreon from "../../assets/img/icons/common/patreon.png";
import stripe from "../../assets/img/icons/common/stripe.png";
import twitch from "../../assets/img/icons/common/twitch.png";

class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Container className=" mt--7" fluid>
          <Row>
            <div className=" col">

              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Integrations</h3>
                </CardHeader>

                <CardBody>
                  <Row className=" icon-examples">

                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          type="button"
                        >
                          <div>
                            <img style={{height:'27px'}} src= {yt} />
                            <span> Youtube </span>
                          </div>
                        </button>
                    </Col>

                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="air-baloon"
                          type="button"
                        >
                          <div>
                            <img style={{height:'30px'}} src= {ig} />
                            <span>Instagram</span>
                          </div>
                        </button>
                    </Col>

                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <img style={{height:'30px'}} src= {substack} />
                            <span> Substack </span>
                          </div>
                        </button>
                    </Col>

                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          type="button"
                        >
                          <div>
                            <img style={{height:'30px'}} src= {fb} />
                            <span>Facebook</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          type="button"
                        >
                          <div>
                            <img style={{height:'30px'}} src= {patreon} />
                            <span>Patreon</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          type="button"
                        >
                          <div>
                            <img style={{height:'30px'}} src= {twitter} />
                            <span>Twitter</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          type="button"
                        >
                          <div>
                            <img style={{height:'30px'}} src= {stripe} />
                            <span>Stripe</span>
                          </div>
                        </button>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          type="button"
                        >
                          <div>
                            <img style={{height:'35px'}} src= {twitch} />
                            <span>Twitch</span>
                          </div>
                        </button>
                    </Col>

                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
