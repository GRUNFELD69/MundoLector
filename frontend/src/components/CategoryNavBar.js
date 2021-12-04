import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const CategoryNavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#category">Categorias</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"
                        className="nav d-flex justify-content-between"
                    >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href="#home">Poesía</Nav.Link>
                            <Nav.Link href="#features">Literatura Universal</Nav.Link>
                            <Nav.Link href="#pricing">Ciencia Ficción</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CategoryNavBar
