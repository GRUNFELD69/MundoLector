import React from 'react'
import { Form, Button, Container, Row, Col, Stack } from 'react-bootstrap'
import BotonSignIn from '../components/BotonSignIn'


const Login = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stack gap={3} className="col-md-5 mx-auto">
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Select aria-label="Default select example">
                                    <option>Tipo de usuario</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Usuario</option>
                                </Form.Select>
                                <br />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <BotonSignIn />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
