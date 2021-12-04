import React from 'react'
import { Button, Navbar, Container, ButtonToolbar, ButtonGroup } from 'react-bootstrap'

const ButtonFunctions = () => {
    return (
        <>
            <h5>Gestión</h5>
            <br />
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#books">Libros</Navbar.Brand>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button href="/bookfunctions" variant="secondary">Agregar</Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button href="/bookfunctions" variant="secondary">Editar</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Third group">
                            <Button variant="secondary">Eliminar</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="me-2" aria-label="First group">
                                <Navbar className="tex">Usuarios</Navbar>
                            </ButtonGroup>
                            <ButtonGroup className="me-2" aria-label="First group">
                                <Button variant="secondary">Agregar</Button>
                            </ButtonGroup>
                            <ButtonGroup className="me-2" aria-label="Second group">
                                <Button variant="secondary">Editar</Button>
                            </ButtonGroup>
                            <ButtonGroup aria-label="Third group">
                                <Button variant="secondary">Eliminar</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default ButtonFunctions
