import React from 'react'
import { Navbar, InputGroup, Nav, Stack, NavDropdown, FormControl, Button, Container, ButtonToolbar, ButtonGroup, Image } from 'react-bootstrap'

const NavBar = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    var isLoggedIn = user !== null;

    const logOut = () => {
        localStorage.removeItem('user');
    };

    var navLinks = (
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="/userhome">Home</Nav.Link>

            <NavDropdown title="Categorias" id="categoryDropdown">
                <NavDropdown.Item href="/searchview" onClick={() => setCategory("Novela")}>Novela</NavDropdown.Item>
                <NavDropdown.Item href="/searchview" onClick={() => setCategory("Ciencia")}>Ciencia</NavDropdown.Item>
                <NavDropdown.Item href="/searchview" onClick={() => setCategory("Suspenso")}>Suspenso</NavDropdown.Item>
                <NavDropdown.Item href="/searchview" onClick={() => setCategory("CienciaFiccion")}>Ciencia Ficción</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Promociones
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );

    if (user !== null) {
        var navlinkRight = (
            <Nav className="ml-auto" >
                <Nav.Link href="/userhome" >
                    <Image src={user.photoUrl} width="30px" height="30px" roundedCircle />
                </Nav.Link>
                <Nav.Link href="/customerprofile">
                    {user.name}
                </Nav.Link>
            </Nav>
        );
    }

    const setCategory = (category) => {
        localStorage.setItem('category', category);
    };

    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/">MundoLector.com</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="justify-content-end"
                        >
                            {navLinks}
                            {navlinkRight}
                            <Nav className="ml-auto">
                                <Stack direction="horizontal" gap={3}>
                                    <Nav.Item>
                                        {isLoggedIn
                                            ? <Nav.Link href="/shoppingcart">Carrito</Nav.Link>
                                            : <Nav.Link href="https://fb.com">Facebook</Nav.Link>
                                        }
                                    </Nav.Item>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Autor"
                                            aria-label="Recipient's username with two button addons"
                                        />
                                        <Button variant="outline-secondary">Buscar</Button>
                                    </InputGroup>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup aria-label="Third group">
                                            {isLoggedIn
                                                ? <Button href="/" variant="outline-light" onClick={logOut}>Salir</Button>
                                                : <Button href="/login" variant="outline-light" >Entrar</Button>
                                            }
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Stack>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar
