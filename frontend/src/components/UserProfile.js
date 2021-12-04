import React from 'react'
import { Card, Button, Row, Container, Col, ListGroup } from 'react-bootstrap'
import Atlantis from '../assets/img/portadas/Atlantis.jpg';
import DejemosHuella from '../assets/img/portadas/DejemosHuella.jpg';
import ElQuintoInfierno from '../assets/img/portadas/elquintoinfierno.jpg';
import Fausto from '../assets/img/portadas/Fausto.jpg';
import LaNinaQueBebioLuzdeLuna from '../assets/img/portadas/LaNinaQueBebioLuzdeLuna.jpg';
import TodasLasHadasdelReino from '../assets/img/portadas/todas-las-hadas-del-reino.jpg';
import LaSemillaFeliz from '../assets/img/portadas/LaSemillaFeliz.jpg';
import ElDiaQueSePerdioLaCordura from '../assets/img/portadas/el-dia-que-se-perdio-la-cordura.jpg';

const UserProfile = () => {
    return (
        <>
            <br />
            <Container>
                <Row>
                    <Col sm={2}>
                        <Row>
                            <ListGroup>
                                <Button href="/adminprofile" variant="secondary">Soy Admin</Button>
                                <br />
                                <ListGroup.Item variant="secondary">Mis Pedidos</ListGroup.Item>
                                <ListGroup.Item>La Maria</ListGroup.Item>
                                <ListGroup.Item>La Hojarasca</ListGroup.Item>
                            </ListGroup>
                        </Row>
                        <br />
                        <Row>
                            <ListGroup>
                                <ListGroup.Item variant="secondary">Mis Preferencias</ListGroup.Item>
                                <ListGroup.Item>Novela</ListGroup.Item>
                                <ListGroup.Item>Ciencia Ficción</ListGroup.Item>
                                <ListGroup.Item>Economía</ListGroup.Item>
                                <ListGroup.Item>Literatura Universal</ListGroup.Item>
                            </ListGroup>
                        </Row>
                        <br />
                        <Row>
                            <ListGroup>
                                <ListGroup.Item variant="secondary">Mis Datos</ListGroup.Item>
                                <ListGroup.Item>Nombre: Luis Quiroz</ListGroup.Item>
                                <ListGroup.Item>Edad: 51</ListGroup.Item>
                                <ListGroup.Item>Rol: Cliente</ListGroup.Item>
                                <ListGroup.Item>Teléfono: 3008679733</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <h5>Recomendados</h5>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={Atlantis} />
                                    <Card.Body>
                                        <Card.Title>Categoría</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">ciencia Ficción</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={DejemosHuella} />
                                    <Card.Body>
                                        <Card.Title>Categoría</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Documental</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={ElQuintoInfierno} />
                                    <Card.Body>
                                        <Card.Title>Categoria</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Suspenso</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={Fausto} />
                                    <Card.Body>
                                        <Card.Title>Categoria</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Literatura Universal</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <h5>Los mas vistos</h5>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={LaNinaQueBebioLuzdeLuna} />
                                    <Card.Body>
                                        <Card.Title>Categoría</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Novela</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={TodasLasHadasdelReino} />
                                    <Card.Body>
                                        <Card.Title>Categoría</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Novela</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={LaSemillaFeliz} />
                                    <Card.Body>
                                        <Card.Title>Categoria</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Drama</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img variant="top" src={ElDiaQueSePerdioLaCordura} />
                                    <Card.Body>
                                        <Card.Title>Categoria</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Humor</Card.Subtitle>
                                        <Button href="/select" variant="primary">Leer mas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default UserProfile
