import React, {useEffect, useState } from 'react'
import { Container, Table, Card, Row, Col } from 'react-bootstrap'
import { getAllBooks } from '../apis/BookStoreCRUD';

const BookList = () => {

    const [orderItem, setItemShow] = useState([]);

    var tmpOrder = JSON.parse(localStorage.getItem('order'));
    var cantidad = localStorage.getItem('cantidad');
    localStorage.removeItem('cantidad');

    useEffect(() => {
        setItemShow(tmpOrder);
    }, []);

    return (
        <>
            <br />
            <Container>
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>

                    {orderItem.map((item, index) => (
                            <tr key={item.Titulo}>
                                <td>{index + 1}</td>
                                <td>
                                    <Card border="primary" style={{ width: '35rem' }}>
                                        <Card.Header className="text-center">{item.Titulo}</Card.Header>
                                        <Row>
                                            <Col md="auto">
                                                <Card.Img variant="top" src={item.photoPortada} />
                                            </Col>
                                            <Col md="auto">
                                                <Card.Body>
                                                    <dl>
                                                        <dt>Titulo</dt>
                                                        <dd>{item.Titulo}</dd>
                                                        <dt>Autor</dt>
                                                        <dd>{item.Autor}</dd>
                                                        <dt>Editorial</dt>
                                                        <dd>{item.Editorial}</dd>
                                                    </dl>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </td>
                                <td>{item.Precio}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.Precio + 2}</td>
                            </tr>
                    ))}

                    </tbody>
                </Table>
            </Container>

        </>
    )
}

export default BookList
