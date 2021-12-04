import React from 'react'
import { Form,Row, Col } from 'react-bootstrap';

const PreferencesList = () => {
    return (
      <>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column md={{ span: 1, offset: 2 }}>
            Preferencias
          </Form.Label>
          <Col sm={10}>
            <Col md={{ span: 18, offset: 3 }}>
              <Form.Check
                inline
                type="checkbox"
                label=" Biografias"
                name="formHorizontalCheckBox"
                id="formHorizontalbios"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Ciencia Ficcion"
                name="formHorizontalCheckBox"
                id="formHorizontalci-fi"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Literatura"
                name="formHorizontalCheckBox"
                id="formHorizontallit"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Literaura Universal"
                name="formHorizontalCheckBox"
                id="formHorizontallitU"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Literatura Hispanoamericana"
                name="formHorizontalCheckBox"
                id="formHorizontallitHisp"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Poesia"
                name="formHorizontalCheckBox"
                id="formHorizontalpoesia"
              />
            </Col>
          </Col>
        </Form.Group>
      </>
    );
  };
  
  export default PreferencesList;
