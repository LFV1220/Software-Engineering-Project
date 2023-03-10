import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

function Register({ setSignedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register = () => {
        setSignedIn(true);
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user
                    console.log(user)
                })
        } catch (err) {
            alert('Signup unsuccessful')
        }
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase "></h2>
                                    <p className=" mb-5">Please enter a valid email address and password.</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Link to='/'>
                                                    <Button onClick={() => Register()} variant="primary" type="submit">
                                                        Register
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account?{" "}
                                                <a href="/Login" className="text-primary fw-bold">
                                                    Login
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;