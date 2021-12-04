import React from 'react'
import { Row, Col, Form, Button, Stack, ButtonGroup } from 'react-bootstrap'
import { addBook } from '../apis/BookStoreCRUD'
//import { Save2 } from 'react-bootstrap-icons';


const BookDetails = () => {

    function handleSubmit(event) {
        event.preventDefault();
        const obj = {
            Titulo: event.target[0].value,
            Autor: event.target[1].value,
            Editorial: event.target[2].value,
            Categoria: event.target[3].value,
            Publicacion: event.target[4].value,
            unDisp: event.target[5].value,
            Precio: event.target[6].value,
            photoPortada: event.target[7].value,
            Descripcion: event.target[8].value,
        }
        addBook(obj, (res) => {
            if (res.status === 200) {
                alert("Libro agregado");
                window.location.href = "/adminprofile";
            } else {
                alert("Error al agregar libro");
            }
        });
    }
    return (
        <>
            <div>
                <br />
                <Stack gap={2} className="col-md-8 mx-auto">
                    <div style={{ textAlign: "center" }}>
                        <h5>Nuevo Libro</h5>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Row >
                            <Col>
                                <Form.Group className="mb-3" controlId="book.Tittle">
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="book.Author">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Editorial">
                                <Form.Label>Editorial</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="book.Category">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Select>
                                    <option>Novela</option>
                                    <option>Ciencia</option>
                                    <option>Suspenso</option>
                                    <option>Ciencia Ficcion</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Publication">
                                <Form.Label>Publicación</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Units">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="book.Url">
                            <Form.Label>URL Photo</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="book.Overview">
                            <Form.Label>Sinopsis</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                        <ButtonGroup className="me-2" aria-label="First group" size="sm">
                            <Button variant="primary" type="submit">Agregar</Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group" size="sm">
                            <Button href="/adminprofile" variant="primary">Salir</Button>
                        </ButtonGroup>
                    </Form>
                </Stack>
            </div>
        </>
    )
}

export default BookDetails
