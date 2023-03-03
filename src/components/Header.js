import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar className='navbar'>
            <Container>
                {/* Logo here */}
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                <Navbar.Brand href="#home">Reservations</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    {/* Authentication, check if isSignedIn */}
                    <Navbar.Text>
                        {/* Signed in as: <a href="#login">Test</a> */}
                        <a href="/Login">Sign In</a> or <a href="/Register">Register</a>
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;