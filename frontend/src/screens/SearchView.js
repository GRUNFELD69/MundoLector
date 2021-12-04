import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AxiosComponent from "../components/AxiosComponent";


const SearchView = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  const category = localStorage.getItem("category");

  if (user == null) {
    return <Navigate to="/" />;
  }

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <h2>Categoria: {category}</h2>
      </Row>
      <Row>
        <Col>
          <AxiosComponent category={category} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchView

