import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import Button from 'react-bootstrap/Button';
// import SearchBar from './SearchBar';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="Nav-bar">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <i
                class="fab fa-pinterest"
                style={{ fontSize: "25px", color: "#e50522" }}
              ></i>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Button className="button-props2" variant="">
                  For you
                </Button>
              </Nav.Link>
              <Nav.Link href="#link">
                <Button className="button-props button-hover" variant="">
                  Following
                </Button>
              </Nav.Link>
              {/* <i class='fas fa-search i-index' style={{ color: "#8e8e8e"}}> Search</i> */}
            </Nav>

            {/* <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
            {/* </Navbar.Collapse> */}
            <Nav.Link href="#">
              {/* <i
                class="fas fa-bell icon-space"
                style={{ fontSize: "25px", color: "#8e8e8e" }}
              ></i> */}
              {[""].map(placement => (
                <>
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">{` ${placement}`}</Popover.Title>
                        <Popover.Content className="padding-popover">
                          <h4>Notifications</h4>
                          <br></br>
                          <h4 className="distance">New</h4>
                          <i
                            class="fab fa-pinterest"
                            style={{ fontSize: "25px", color: "#e50522" }}
                          >
                            <span className="font-popover">
                              Letter tattoos, viking tattoos, and more.{" "}
                            </span>
                          </i>
                          <Row className="container-popover">
                            <Col xs={6} md={6}>
                              <Image
                                className="round"
                                src="https://images.unsplash.com/photo-1557286581-db6c124a6e2f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                thumbnail
                              />
                            </Col>
                            {/* <Col xs={6} md={4}>
                              <Image
                                src={require("../img/cat.jpg")}
                                thumbnail
                              />
                            </Col> */}
                            <Col xs={6} md={6}>
                              <Image
                                className="round"
                                src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                thumbnail
                              />
                            </Col>
                          </Row>

                          <p>
                            <h4
                              className="distance"
                              style={{ marginTop: "30px" }}
                            >
                              Earlier
                            </h4>

                            <i
                              class="fab fa-pinterest"
                              style={{ fontSize: "25px", color: "#e50522" }}
                            >
                              <span className="font-popover">
                                Abstract, design, and more.
                              </span>
                            </i>

                            <Row className="container-popover">
                              <Col xs={6} md={6}>
                                <Image
                                  className="round"
                                  src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                  thumbnail
                                />
                              </Col>
                              {/* <Col xs={6} md={4}>
                                <Image
                                  src="https://images.unsplash.com/photo-1526893299283-37e82b1e4da5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                  thumbnail
                                />
                              </Col> */}
                              <Col xs={6} md={6}>
                                <Image
                                  className="round"
                                  src="https://images.unsplash.com/photo-1508862842963-67ae79d4eded?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                  thumbnail
                                />
                              </Col>
                            </Row>
                          </p>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <i
                      class="fas fa-bell icon-space"
                      style={{ fontSize: "25px", color: "#8e8e8e" }}
                    >
                      {placement}
                    </i>
                  </OverlayTrigger>{" "}
                </>
              ))}
            </Nav.Link>
            <Nav.Link href="#">
              {[""].map(placement => (
                <>
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">{` ${placement}`}</Popover.Title>
                        <Popover.Content>
                                <strong style={{ fontSize:"20px" }}>Inbox</strong>
                          <br></br>
                          <h1 style={{marginTop:"40px" }}>Share your ideas</h1>
                          <Form className="" inline>
                                    <FormControl style={{ backgroundColor:"#f0f0f0" }}
                              type="text"
                              placeholder="Search by name or email"
                              className="mr-sm-2 form-length"
                            />{" "}
                            <i class="fas fa-search"></i>
                            {/* <Button variant="outline-success">Search</Button> */}
                          </Form>
                          <p></p>
                                <p style={{ marginTop: "30px" }}>Suggestions</p>
                          <Container>
                            <Row className="container-popover">
                              <Col xs={6} md={6}>
                                <Image style={{borderRadius: "100px", width:"70%"}}
                                  className="round"
                                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                  thumbnail
                                />
                                <i
                                  class="fab fa-pinterest"
                                  style={{ fontSize: "15px", color: "#e50522" }}
                                >
                                  {" "}
                                  <span style={{ color: "grey" }}>
                                    On Pinteret
                                  </span>
                                </i>
                              </Col>
                            </Row>
                          </Container>
                          <Container>
                            <Row className="container-popover">
                              <Col xs={6} md={6}>
                                            <Image style={{ borderRadius: "100px", width:"70%" }}
                                  className="round"
                                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExOTA4N30"
                                  thumbnail
                                />
                                <i
                                  class="fab fa-pinterest"
                                  style={{ fontSize: "15px", color: "#e50522" }}
                                >
                                  {" "}
                                  <span style={{ color: "grey" }}>
                                    On Pinteret
                                  </span>
                                </i>
                              </Col>
                            </Row>
                          </Container>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <i
                      class="fas fa-comment-dots icon-space"
                      style={{ fontSize: "25px", color: "#8e8e8e" }}
                    >
                      {placement}
                    </i>
                  </OverlayTrigger>{" "}
                </>
              ))}
            </Nav.Link>
            <Nav.Link href="#">
              <i
                class="fas fa-user-circle icon-space"
                style={{ fontSize: "25px", color: "#8e8e8e" }}
              ></i>
            </Nav.Link>
            <Nav.Link href="#">
              {[""].map(placement => (
                <>
                  <OverlayTrigger 
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                            <Popover.Content style={{ padding: "0px 20px", paddingBottom:"20px" }}>
                                <br></br>Accounts<p></p>
                          <strong className="tab-font">Add another account</strong> <br></br>
                                <strong className="tab-font">Add a free business account</strong><br></br>
                          <br></br>More options <p></p>
                                <strong className="tab-font">Settings</strong><br></br>
                                <strong className="tab-font">Tune your home feed</strong><br></br>
                                <strong className="tab-font">Install your chrome app</strong> <br></br>
                                <strong className="tab-font">Get help</strong><br></br>
                                <strong className="tab-font">See terms and privacy</strong><br></br>
                                <strong className="tab-font">Log out</strong> 
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <i
                      class="fas fa-chevron-down icon-space"
                      style={{ fontSize: "20px", color: "#8e8e8e" }}
                    >
                      {placement}
                    </i>
                  </OverlayTrigger>{" "}
                </>
              ))}
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
