import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { getBooksTittle } from "../apis/BookStoreCRUD";


const InstantBooks = () => {
    const tittle = localStorage.getItem("tittle");
    localStorage.removeItem("tittle");
    const [bookTittle, setSearchResults] = useState([]);

    useEffect(() => {
        getBooksTittle(tittle, setSearchResults);
    }, []);

    function itemOrder(event) {
        event.preventDefault();
        console.log(event);
        bookTittle[0].cantidad = event.target[0].value;
        var tmpOrder = JSON.parse(localStorage.getItem('order'));
        if (tmpOrder === null) {
            tmpOrder = [];
        } 
        tmpOrder.push(bookTittle[0]);
        localStorage.setItem('order', JSON.stringify(tmpOrder));
        //localStorage.removeItem('order');
        //localStorage.removeItem('cantidad');
        window.location.href = "/userhome";
    }

    return (
        <>
            <br />
            <Container>
                {
                    bookTittle.map((result, index) => (
                        <Row key={result.Titulo}>
                            <Col sm={3} >
                                <Card style={{ width: '14rem' }} key={result.Titulo}>
                                    <Card.Img variant="top" src={result.photoPortada} />
                                    <Card.Body>
                                        <Card.Title>{"Categoría: " + result.Categoria}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Row>
                                    <h3>{result.Titulo + " / " + result.Autor}</h3>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <br />
                                        <h5>{"Precio COP $ " + result.Precio}</h5>
                                        <h5>{"Stock " + result.unDisp + " unidades"}</h5>
                                    </Col>
                                    <Col sm={4}>
                                        <Form onSubmit={itemOrder}>
                                            <Form.Group className="mb-3" controlId="formBookQuantity">
                                                <Form.Label>Cantidad</Form.Label>
                                                <Form.Control type="number"  />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Comprar
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <div className="row justify-content-center">
                                        <p>{result.Descripcion}</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    ))}
            </Container>
        </>
    )
}

export default InstantBooks

