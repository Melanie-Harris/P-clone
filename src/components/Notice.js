import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import SearchBar from './SearchBar';


class Notice extends React.Component {
    render() {
        return (
            <div>
                <div className="Nav-bar">
                    <Navbar className="notice-props" bg="" expand="lg">
                        <label>We updated our <u>Privacy Policy</u> to help you understand the nitty gritty of how we use data at Pinterest. <br /><u><Nav.Link className="notice-props no-style" href="https://www.melanieharris.dev/">Learn more</Nav.Link></u></label>
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}


                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                            <Nav className="mr-auto">
                                {/* <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link> */}
                                {/* <i class='fas fa-search i-index'></i> */}
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Form inline>
                                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                                <Button className="button-props" variant="">Accept</Button>
                            </Form>
                        {/* </Navbar.Collapse> */}
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Notice;