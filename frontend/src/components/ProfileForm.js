import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Stack, ButtonGroup, Container, Figure } from 'react-bootstrap'
import { addUser, updateUser, getUser } from '../apis/UserCRUD'
import photo_LAQ from '../assets/img/photo_LAQ.jpg';

//import { Save2 } from 'react-bootstrap-icons';

const ProfileForm = (props) => {

    const [userActions, setSearchResults] = useState(props.user);


    useEffect(() => {
        //setSearchResults(props.book);
        //getAllCategories(getCategories);
        getUser(props.user.email, setSearchResults);
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


    /*
    function handleCategory(e, campo) {
        e.preventDefault();
        cambiarUser(campo, e.target.value);
    };*/

    function handleSubmit(event) {
        var tmpUser = {
            Biografia: userActions.Biografia,
            Direccion: userActions.Direccion,
            Edad: userActions.Edad,
            Nombre: userActions.Nombre,
            Rol: userActions.Rol,
            Telefono: userActions.Telefono,
            nombreUsuario: userActions.nombreUsuario,
            id: userActions.id
        };
        event.preventDefault();
        if (props.actionUser === "Agregar") {
            addUser(tmpUser, (res) => {
                if (res.status === 201) {
                    alert("Usuario agregado");

                } else {
                    alert("Error al agregar usuario");
                }
            });
        } else {
            updateUser(userActions.id, tmpUser, (res) => {
                if (res.status === 200) {
                    alert("Usuario actualizado");
                    window.location.href = "/userhome";
                } else {
                    alert("Error al actualizar usuario");
                }
            });
        }
        const tmpLocal = localStorage.getItem("eUser");
        if (tmpLocal !== null) {
            window.location.href = "/adminprofile";
            localStorage.removeItem('eUser');
        }else{
            window.location.href = "/userhome";
        }   
    }

    return (
        <>
            <div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h5>{props.actionUser + " Usuario"}</h5>
                </div>
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
                                <Stack gap={2} className="col-md-5 mx-auto">
                                    <Button variant="secondary">Edit</Button>
                                    <Button variant="secondary">Save</Button>
                                    <Button href="/userhome" variant="outline-secondary">Cancel</Button>
                                </Stack>
                            </Row>
                        </Col>

                        <Col sm={10}>
                            <Row>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Group as={Col} controlId="user.Name" >
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control requiered="True" type="text" value={userActions.Nombre} onChange={(e) => handleChange(e, "Nombre")} />
                                                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="user.Username">
                                            <Form.Label>UserName</Form.Label>
                                            <Form.Control requiered="True" type="text" value={userActions.nombreUsuario} onChange={(e) => handleChange(e, "Username")} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="user.Direccion">
                                            <Form.Label>Direccion</Form.Label>
                                            <Form.Control requiered="True" type="text" value={userActions.Direccion} onChange={(e) => handleChange(e, "Direccion")} />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="user.Telefono">
                                            <Form.Label>Teléfono</Form.Label>
                                            <Form.Control requiered="True" type="number" value={userActions.Telefono} onChange={(e) => handleChange(e, "Telefono")} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="user.Edad">
                                            <Form.Label>Edad</Form.Label>
                                            <Form.Control requiered="True" type="number" value={userActions.Edad} onChange={(e) => handleChange(e, "Edad")} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="user.Rol">
                                            <Form.Label>Rol</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option value="User">Usuario</option>
                                                <option value="Admin">Admin</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="user.UrlPhoto">
                                        <Form.Label>Fotografía</Form.Label>
                                        <Form.Control requiered="True" type="text" value={userActions.UrlPhoto} onChange={(e) => handleChange(e, "UrlPhoto")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="user.Biografia">
                                        <Form.Label>Biografia</Form.Label>
                                        <Form.Control as="textarea" rows={3} value={userActions.Biografia} onChange={(e) => handleChange(e, "Biografia")} />
                                    </Form.Group>
                                    <ButtonGroup className="me-2" aria-label="First group" size="sm">
                                        <Button variant="primary" type="submit">Guardar</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="me-2" aria-label="Second group" size="sm">
                                        <Button href="/userhome" variant="primary">Salir</Button>
                                    </ButtonGroup>
                                </Form>
                            </Row>
                        </Col>



                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProfileForm


