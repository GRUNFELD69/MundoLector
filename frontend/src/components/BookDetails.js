import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Stack, ButtonGroup } from 'react-bootstrap'
import { addBook, updateBook, getBook } from '../apis/BookStoreCRUD'
//import { Save2 } from 'react-bootstrap-icons';

const BookDetails = (props) => {
    const [bookActions, setSearchResults] = useState(props.book);
    const [category, setCategory] = useState(props.book.Categoria);

    useEffect(() => {
        setSearchResults(props.book);
        setCategory(props.book.Categoria);
        //getBook(props.book.id, setSearchResults);
    }, []);

    const cambiarUser = (_campo, _valor) => {
        //version callback del setter de useState
        setSearchResults(prevState => {
            return { ...prevState, [_campo]: _valor }
        })
    }

    function handleChange(e, campo) {
        e.preventDefault();
        cambiarUser(campo, e.target.value);
    };

    function handleCategory(e, campo) {
        e.preventDefault();
        setCategory(e.target.value);
        cambiarUser(campo, e.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        if (props.actionBook === "Agregar") {
            addBook(bookActions, (res) => {
                if (res.status === 200) {
                    alert("Libro agregado");
                    window.location.href = "/adminprofile";
                } else {
                    alert("Error al agregar libro");
                }
            });
        } else {
            updateBook(props.book.id, bookActions, (res) => {
                if (res.status === 200) {
                    alert("Libro actualizado");
                    window.location.href = "/adminprofile";
                } else {
                    alert("Error al actualizar libro");
                }
            });
        }
    }

    return (
        <>
            <div>
                <br />
                <Stack gap={2} className="col-md-8 mx-auto">
                    <div style={{ textAlign: "center" }}>
                        <h5>{props.actionBook + " Libro"}</h5>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group as={Col} controlId="book.Tittle" >
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control requiered="True" type="text" value={bookActions.Titulo} onChange={(e) => handleChange(e, "Titulo")} />
                                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="book.Author">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control requiered="True" type="text" value={bookActions.Autor} onChange={(e) => handleChange(e, "Autor")} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Editorial">
                                <Form.Label>Editorial</Form.Label>
                                <Form.Control requiered="True" type="text" value={bookActions.Editorial} onChange={(e) => handleChange(e, "Editorial")} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="book.Category">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Select value={category} onChange={(e) => handleCategory(e, "Categoria")}>
                                    <option value="Novela">Novela</option>
                                    <option value="Ciencia">Ciencia</option>
                                    <option value="Suspenso">Suspenso</option>
                                    <option value="Ciencia Ficcion">Ciencia Ficcion</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Publication">
                                <Form.Label>Publicación</Form.Label>
                                <Form.Control requiered="True" type="number" value={bookActions.Publicacion} onChange={(e) => handleChange(e, "Publicacion")} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Units">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control requiered="True" type="number" value={bookActions.unDisp} onChange={(e) => handleChange(e, "unDisp")} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="book.Price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control requiered="True" type="number" value={bookActions.Precio} onChange={(e) => handleChange(e, "Precio")} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="book.Url">
                            <Form.Label>URL Photo</Form.Label>
                            <Form.Control requiered="True" type="text" value={bookActions.photoPortada} onChange={(e) => handleChange(e, "photoPortada")} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="book.Overview">
                            <Form.Label>Sinopsis</Form.Label>
                            <Form.Control requiered="True" as="textarea" rows={3} value={bookActions.Descripcion} onChange={(e) => handleChange(e, "Descripcion")} />
                        </Form.Group>
                        <ButtonGroup className="me-2" aria-label="First group" size="sm">
                            <Button variant="primary" type="submit">Guardar</Button>
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
