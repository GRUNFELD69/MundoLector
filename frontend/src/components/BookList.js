import React from 'react'
import { Container, Table,Card, Row, Col} from 'react-bootstrap'
import DejemosHuella from '../assets/img/portadas/DejemosHuella.jpg';
import Atlantis from '../assets/img/portadas/Atlantis.jpg';
import ElQuintoInfierno from '../assets/img/portadas/elquintoinfierno.jpg';

const BookList = () => {
    return (
        <>
            <br />
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Descripción
                            </th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <Card border="primary" style={{ width: '35rem' }}>
                                    <Card.Header className="text-center">Atlantis Proyecto Tarsis</Card.Header>
                                    <Row>
                                        <Col md="auto">
                                            <Card.Img variant="top" src={Atlantis} />
                                        </Col>
                                        <Col md="auto">
                                            <Card.Body>
                                                <dl>
                                                    <dt>Titulo</dt>
                                                    <dd>Atlantis</dd>
                                                    <dt>Autor</dt>
                                                    <dd>Jose Enrique Serrano</dd>
                                                    <dt>Editorial</dt>
                                                    <dd>Prentice Hall</dd>
                                                </dl>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </td>
                            <td>1000</td>
                            <td>1</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <Card border="primary" style={{ width: '35rem' }}>
                                    <Card.Header className="text-center">Dejemos Huella</Card.Header>
                                    <Row>
                                        <Col md="auto">
                                            <Card.Img variant="top" src={DejemosHuella} />
                                        </Col>
                                        <Col md="auto">
                                            <Card.Body>
                                                <dl>
                                                    <dt>Titulo</dt>
                                                    <dd>Dejemos Huella Costa Rica pide mas.</dd>
                                                    <dt>Autor</dt>
                                                    <dd>Pedro Muñoz.</dd>
                                                    <dt>Editorial</dt>
                                                    <dd>Panamericana.</dd>
                                                </dl>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </td>
                            <td>2000</td>
                            <td>3</td>
                            <td>6000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <Card border="primary" style={{ width: '35rem' }}>
                                    <Card.Header className="text-center">El Quinto Infierno</Card.Header>
                                    <Row>
                                        <Col md="auto">
                                            <Card.Img variant="top" src={ElQuintoInfierno} />
                                        </Col>
                                        <Col md="auto">
                                            <Card.Body>
                                                <dl>
                                                    <dt>Titulo</dt>
                                                    <dd>ElQuintoInfierno</dd>
                                                    <dt>Autor</dt>
                                                    <dd>P. Olivero</dd>
                                                    <dt>Editorial</dt>
                                                    <dd>Mc Graw Hill</dd>
                                                </dl>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </td>
                            <td>4500</td>
                            <td>2</td>
                            <td>9000</td>
                        </tr>
                        <tr>
                            <td colSpan="4">Total</td>
                            <td>16000</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </>
    )
}

export default BookList
