import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { BsBag } from "react-icons/bs";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


function Header({ isSignedIn, setSignedIn, user }) {
    const signOut = () => setSignedIn(false);

    return (
        <Navbar className='navbar'>
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        <img src="./SE_Logo" />
                    </Navbar.Brand>
                </Link>
                <Link to="/Menu" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>Menu</Navbar.Brand>
                </Link>
                <Link to="/Reservations" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>Reservations</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {isSignedIn
                            ? <div>
                                <MDBDropdown>
                                    <MDBDropdownToggle color='link'>{user}</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Order History</MDBDropdownItem>
                                        <MDBDropdownItem link>Reservations</MDBDropdownItem>
                                        <MDBDropdownItem onClick={() => signOut()}>Sign Out</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                            : <div><a href="/Login">Sign In</a> or <a href="/Register">Register</a></div>}
                    </Navbar.Text>
                    <NavbarBrand></NavbarBrand>
                    {isSignedIn
                        ?
                        <div>
                            <Link to="/Cart">
                                <Navbar.Brand>
                                    <BsBag />
                                </Navbar.Brand>
                            </Link>
                        </div>
                        : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;