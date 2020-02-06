import React,{ Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

class Header extends Component{
    render(){
        return (
            <div id="Header">
                <Navbar expand="lg" variant="dark" bg="dark"> 
                        <Navbar.Brand href="/Home"><Image
                        src="sheilalogo.png"
                        height="100"
                        width="100"
                        roundedCircle
                        className="d-inline-block align-top"
                        /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav classname="mr-auto">
                                <Nav.Link href="/Home">Home</Nav.Link>
                                <Nav.Link href="#Menu">Menu</Nav.Link>
                                <Nav.Link href="#Aboutus">Our Story</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>     
            </div>
        );
    }
}

export default Header;