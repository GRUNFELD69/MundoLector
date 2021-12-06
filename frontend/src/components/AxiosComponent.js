import React, { useState, useEffect } from "react";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";

//import ResultItem from "./ResultItem";
import { getBooksCategory } from "../apis/BookStoreCRUD";

const AxiosComponent = (props) => {

  const [bookResults, setSearchResults] = useState([]);

  useEffect(() => {
    getBooksCategory(props.category, setSearchResults);
  }, []);

  const setTitulo = (tittle) => {
    localStorage.setItem('tittle', tittle);
  };
console.log(bookResults);
  return (
    <Container>
      <Row >
        <CardGroup>
          {
            bookResults.map((result, index) => (
              <Col key={result.Titulo}>
                <Card style={{ width: '12rem' }} href={"#" + index}>
                  <Card.Img variant="top" src={result.photoPortada} />
                  <Card.Body>
                    <Card.Title as="h5">{result.Titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{"Editorial: " + result.Editorial}</Card.Subtitle>
                    <Card.Text>{"Precio: " + result.Precio}</Card.Text>
                    <Button href="/select" id={"button_" + result.Titulo} variant="primary" onClick={() => setTitulo(result.Titulo)}>Leer mas</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </CardGroup>
      </Row>
    </Container>
  );
};

export default AxiosComponent;
