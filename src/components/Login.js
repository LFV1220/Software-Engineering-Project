import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

function Login({ setSignedIn, setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user
                    console.log(user)
                    setSignedIn(true);
                })
        } catch (err) {
            alert('Login unsuccessful')
        }
    }

    const handleEmail = (val) => {
        setEmail(val);
        setUser(val);
    }

    return (
        <div style={{ backgroundImage: "url('https://w.forfun.com/fetch/e4/e43c51861269e935ced53777773e8e4c.jpeg')"}}>
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase "></h2>
                                    <p className=" mb-5">Please enter your login and password!</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control onChange={e => handleEmail(e.target.value)} type="email" placeholder="Enter email" />
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
                                                    <Button onClick={() => Login()} variant="primary" type="submit">
                                                        Login
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{" "}
                                                <a href="/Register" className="text-primary fw-bold">
                                                    Sign Up
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
        </div>
    );
}

export default Login;