import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Digimons App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favorite">My Digimons</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
