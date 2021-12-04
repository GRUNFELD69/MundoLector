import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Container, Figure, Stack, Tabs, Tab, } from 'react-bootstrap'
import photo_LAQ from '../assets/img/photo_LAQ.jpg';
import { getAllBooks, deleteBook } from '../apis/BookStoreCRUD';
import ModalBook from './ModalBooks.js';
import TabBooks from './TabBooks';
import TabAdminProfile from './TabAdminProfile';


const AdminProfile = () => {

    const [bookcollection, setSearchResults] = useState([]);
    const [value, setValue] = useState([]);
    const [show, setShow] = useState(false);


    const handleChange = (val) => {
        setValue(val);
        setShow(true);
        localStorage.setItem('id', val.id);
    };

    const handleEdit = (val) => {
        localStorage.setItem("book", JSON.stringify(val));
        window.location.href = '/BookFunctions';
    }

    const handleClose = () => {
        setShow(false);
    }


    const delBook = (id) => {
        setShow(false);
        localStorage.removeItem('id');
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

            <ModalBook value={value} show={show} delBook={delBook} handleClose={handleClose} />
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
                                        <TabBooks bookCollection={bookcollection} value={value} handleChange={handleChange} handleEdit={handleEdit}/>
                                    </Tab>
                                    <Tab eventKey="usuarios" title="Usuarios">
                                        <h5>numero2</h5>
                                    </Tab>
                                    <Tab eventKey="profile" title="Perfil">
                                        <TabAdminProfile />
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