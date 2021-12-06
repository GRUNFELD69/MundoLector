import React, { useState, useEffect } from 'react'
import { Card, Button, Row, Container, Col, ListGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { getAllBooks } from '../apis/BookStoreCRUD';

const UserProfile = () => {

    const [bookcollection, setSearchResults] = useState([]);
    const [valueBook, setValueBook] = useState([]);

    useEffect(() => {
        getAllBooks(setSearchResults);
    }, []);

    function handleAdmin() {
        localStorage.setItem('TabAdmin', 'libros');
        window.location.href = '/adminprofile';
    }

    const handleReadBook = (val) => {
        setValueBook(val);
        localStorage.setItem("tittle", val.Titulo);
        window.location.href = '/select';
    }    

    return (
        <>
            <br />
            <Container>
                <Row>
                    <Col sm={2}>
                        <Row>
                            <ListGroup>
                                <Button variant="secondary" onClick={handleAdmin}>Soy Admin</Button>
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
                                <ListGroup.Item>Teléfono: 3008679755</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <h5>Recomendados</h5>
                            {bookcollection.map((result, index) => (
                                <Col sm={3} key={result.id}>
                                    <Card style={{ width: '12rem' }}>
                                        <Card.Img variant="top" src={result.photoPortada} />
                                        <Card.Body>
                                            <Card.Title>Categoría</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{result.Categoria}</Card.Subtitle>
                                            <ToggleButtonGroup name="radioReadBooks" type="radio" value={valueBook} onChange={handleReadBook}>
                                                <ToggleButton name={"read" + result.Titulo} id={"read" + result.id + result.Titulo} value={result} variant="success" >Leer mas</ToggleButton>
                                            </ToggleButtonGroup>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default UserProfile
