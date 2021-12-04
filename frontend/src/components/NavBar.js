import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, ButtonToolbar, ButtonGroup } from 'react-bootstrap'

const NavBar = () => {
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const logOut = () => {
    localStorage.removeItem('user');
  };

  const setCategory = (category) => {
    localStorage.setItem('category', category);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">MundoLector.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll"
            className="nav d-flex justify-content-between"
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/userhome">Home</Nav.Link>
              <Nav.Link href="/login">Ingresar</Nav.Link>
              <Nav.Link href="/customerprofile">Perfil</Nav.Link>
              <Nav.Link href="/shoppingcart">Carrito</Nav.Link>
              <NavDropdown title="Categorias" id="categoryDropdown">
                <NavDropdown.Item href="/searchview" onClick={()=>setCategory("Novela")}>Novela</NavDropdown.Item>
                <NavDropdown.Item href="/searchview" onClick={()=>setCategory("Ciencia")}>Ciencia</NavDropdown.Item>
                <NavDropdown.Item href="/searchview" onClick={()=>setCategory("Suspenso")}>Suspenso</NavDropdown.Item>
                <NavDropdown.Item href="/searchview" onClick={()=>setCategory("CienciaFiccion")}>Ciencia Ficción</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Promociones
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>


            <Nav className="ml-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button variant="outline-light">Buscar</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <Button href="/" variant="outline-light" onClick={logOut}>Salir</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )

}

export default NavBar
