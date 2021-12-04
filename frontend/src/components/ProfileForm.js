import React from 'react'
import { Form, Button, Row, Col, Container, Figure, Stack } from 'react-bootstrap'
import PreferenceList from './PreferenceList';
import photo_LAQ from '../assets/img/photo_LAQ.jpg';

const ProfileForm = () => {
    return (
        <>
            <br />
            <Container>
                <Row>
                    <Col sm={2}>
                        <Row>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={photo_LAQ}
                                />
                            </Figure>
                        </Row>
                        <Row>
                            <Stack gap={2} className="col-md-5 mx-auto">
                                <Button variant="secondary">Edit</Button>
                                <Button variant="secondary">Save</Button>
                                <Button href="/userhome" variant="outline-secondary">Cancel</Button>
                            </Stack>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <Form>
                                <Row>
                                    <Col>
                                        <Stack gap={6}>
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control placeholder="Luis Alejandro Quiroz" />
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control placeholder="Calle 40SUR # 72L-40" />
                                            <Form.Label>Edad</Form.Label>
                                            <Form.Control placeholder="51" />
                                        </Stack>
                                    </Col>
                                    <Col>
                                        <Stack gap={6}>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control placeholder="quiroz.luis" />
                                            <Form.Label>Telefóno</Form.Label>
                                            <Form.Control placeholder="3008679733" />
                                            <Form.Label>Rol</Form.Label>
                                            <Form.Control placeholder="Usuario" />
                                        </Stack>
                                    </Col>
                                </Row>
                            </Form>
                        </Row>
                        <br />
                        <Row>
                            <PreferenceList />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProfileForm;

