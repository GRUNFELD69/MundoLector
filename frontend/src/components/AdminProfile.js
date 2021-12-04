import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Container, Figure, Stack, Tabs, Tab, Table, ToggleButton, ToggleButtonGroup, Modal } from 'react-bootstrap'
import photo_LAQ from '../assets/img/photo_LAQ.jpg';
import { getAllBooks, deleteBook } from '../apis/BookStoreCRUD';



const AdminProfile = () => {

    const [bookCollection, setSearchResults] = useState([]);
    const [value, setValue] = useState([]);
    const [show, setShow] = useState(false);


    const handleChange = (val) => {
        setValue(val);
        setShow(true);
        localStorage.setItem('id', val.id);
    };

    const handleClose = () => {
        setShow(false);
    }


    const delBook = (id) => {
        setShow(false);
        console.log("id: " + id);
            deleteBook(id, (res) => {
                console.log("Libro eliminado");
                if (res.status === 200) {
                    alert("Libro eliminado");
                } else {
                    alert("Error al eliminar libro");
                }
            }
            );
            window.location.reload();
    };

    useEffect(() => {
        getAllBooks(setSearchResults);
    }, []);

    return (
        <>
            <br />

            <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{"Esta seguro de eliminar " + value.Titulo}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => delBook(value.id)}>
                        Eliminar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>




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
                            <div style={{ textAlign: "center" }}>
                                <h5>Nuevo</h5>
                            </div>
                            <Stack gap={2} className="col-md-5 mx-auto">
                                <Button href="/bookfunctions" variant="secondary">Libro</Button>
                                <Button variant="secondary">Usuario</Button>
                                <Button href="/userhome" variant="outline-secondary">Salir</Button>
                            </Stack>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <br />
                        <Row>
                            <Container>
                                <Tabs defaultActiveKey="libros" id="adminProfile" className="mb-3">
                                    <Tab eventKey="libros" title="Libros">
                                        <Table striped bordered hover responsive size="sm">
                                            <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Portada</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bookCollection.map((result, index) => (
                                                    <tr key={result.Titulo}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <Figure>
                                                                <Figure.Image
                                                                    width={85}
                                                                    height={90}
                                                                    alt="85x90"
                                                                    src={result.photoPortada}
                                                                />
                                                            </Figure>
                                                        </td>
                                                        <td>{result.Precio}</td>
                                                        <td>{result.unDisp}</td>
                                                        <td><Button href="#" variant="success">Editar</Button></td>
                                                        <td>
                                                            <ToggleButtonGroup name="radioBooks" type="radio" value={value} onChange={handleChange}>
                                                                <ToggleButton name={result.Titulo} id={result.id + result.Titulo} value={result} variant="danger" >Eliminar</ToggleButton>
                                                            </ToggleButtonGroup>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Tab>
                                    <Tab eventKey="usuarios" title="Usuarios">
                                        <h5>numero2</h5>
                                    </Tab>
                                    <Tab eventKey="profile" title="Perfil">
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Stack gap={6}>
                                                        <Form.Label>Nombre</Form.Label>
                                                        <Form.Control placeholder="Luis Alejandro Quiroz" />
                                                        <Form.Label>Edad</Form.Label>
                                                        <Form.Control placeholder="51" />
                                                        <Form.Label>Código Empleado</Form.Label>
                                                        <Form.Control placeholder="55-667788" />
                                                    </Stack>
                                                </Col>
                                                <Col>
                                                    <Stack gap={6}>
                                                        <Form.Label>DNI</Form.Label>
                                                        <Form.Control placeholder="12345678" />
                                                        <Form.Label>e-mail</Form.Label>
                                                        <Form.Control placeholder="lquiroz@mintic.com" />
                                                        <Form.Label>Salario</Form.Label>
                                                        <Form.Control placeholder="COP $ 1.000.000" />
                                                    </Stack>
                                                </Col>
                                                <Col>
                                                    <Stack gap={6}>
                                                        <Form.Label>Username</Form.Label>
                                                        <Form.Control placeholder="quiroz.admin" />
                                                        <Form.Label>Telefóno</Form.Label>
                                                        <Form.Control placeholder="12345678" />
                                                        <Form.Label>Rol</Form.Label>
                                                        <Form.Control placeholder="Administrador" />
                                                    </Stack>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab>
                                </Tabs>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AdminProfile;