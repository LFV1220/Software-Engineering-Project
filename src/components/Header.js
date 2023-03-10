import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header({ isSignedIn, setSignedIn }) {
    const signOut = () => setSignedIn(false);

    return (
        <Navbar className='navbar'>
            <Container>
                {/* Logo here */}
                <Navbar.Brand href="">Menu</Navbar.Brand>
                <Navbar.Brand href="">Reservations</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    {/* Authentication, check if isSignedIn */}
                    <Navbar.Text>
                        {isSignedIn
                            ? <div>Signed in as: <a href='/Menu'>Test</a></div>
                            : <div><a href="/Login">Sign In</a> or <a href="/Register">Register</a></div>}
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;