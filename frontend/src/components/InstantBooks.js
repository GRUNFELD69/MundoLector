import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import { getBooksTittle } from "../apis/BookStoreCRUD";


const InstantBooks = () => {
  const tittle = localStorage.getItem("tittle");
  const [bookTittle, setSearchResults] = useState([]);

  useEffect(() => {
    getBooksTittle(tittle, setSearchResults);
  }, []);

  return (
    <>
    <br />
      <Container>
        {
          bookTittle.map((result, index) => (
            <Row key={result.Titulo}>
              <Col sm={3} >
                <Card style={{ width: '14rem' }} key={result.Titulo}>
                  <Card.Img variant="top" src={result.photoPortada} />
                  <Card.Body>
                    <Card.Title>{"Categoría: " + result.Categoria}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Row>
                  <h3>{result.Titulo + " / " + result.Autor}</h3>
                </Row>
                <br />
                <Row>
                  <Col>
                    <br />
                    <h5>{"Precio COP $ " + result.Precio}</h5>
                    <h5>{"Stock " + result.unDisp + " unidades"}</h5>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-default">Cantidad</InputGroup.Text>
                      <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    <Button href="/shoppingcart" variant="primary">Comprar</Button>
                  </Col>
                </Row>
                <br />
                <Row>
                  <div className="row justify-content-center">
                    <p>{result.Descripcion}</p>
                  </div>
                </Row>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  )
}

export default InstantBooks

