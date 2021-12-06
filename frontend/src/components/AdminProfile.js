import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Container, Figure, Stack, Tabs, Tab, } from 'react-bootstrap'
import photo_LAQ from '../assets/img/photo_LAQ.jpg';
import { getAllBooks, deleteBook } from '../apis/BookStoreCRUD';
import ModalBook from './ModalBooks.js';
import TabBooks from './TabBooks';
import TabAdminProfile from './TabAdminProfile';
import TabCategories from './TabCategories';
import TableUsers from './TableUsers';


const AdminProfile = () => {

    var Tabstate = localStorage.getItem('TabAdmin');

    const [bookcollection, setSearchResults] = useState([]);
    const [value, setValue] = useState([]);
    const [show, setShow] = useState(false);
    const [keyTab, setKeyTab] = useState(Tabstate);

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

    const adminRequest = (peticion) => {
        localStorage.setItem('adminRequest', peticion);
    };

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

    function handleKeyTab(e) {
        setKeyTab(e);
        localStorage.setItem('TabAdmin', e);
    }

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
                                <Button href="/customerprofile" variant="secondary" onClick={() => adminRequest("newUser")}>Usuario</Button>
                                <Button href="/userhome" variant="outline-secondary">Salir</Button>
                            </Stack>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <br />
                        <Row>
                            <Container>
                                <Tabs
                                    id="adminProfile"
                                    className="mb-3"
                                    activeKey={keyTab}
                                    onSelect={(k) => handleKeyTab(k)}                                    
                                >
                                    <Tab eventKey="libros" title="Libros">
                                        <TabBooks bookCollection={bookcollection} value={value} handleChange={handleChange} handleEdit={handleEdit} />
                                    </Tab>
                                    <Tab eventKey="usuarios" title="Usuarios">
                                        <TableUsers />
                                    </Tab>
                                    <Tab eventKey="categorias" title="Categorias">
                                        <TabCategories />
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