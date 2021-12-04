import React from 'react'
import { Row, Col, Form, Stack } from 'react-bootstrap'

const TabAdminProfile = () => {
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Stack gap={6}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Luis Alejandro Quiroz" />
                            <Form.Label>Edad</Form.Label>
                            <Form.Control placeholder="51" />
                            <Form.Label>Código Empleado</Form.Label>
                            <Form.Control placeholder="55-667788" />
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={6}>
                            <Form.Label>DNI</Form.Label>
                            <Form.Control placeholder="12345678" />
                            <Form.Label>e-mail</Form.Label>
                            <Form.Control placeholder="lquiroz@mintic.com" />
                            <Form.Label>Salario</Form.Label>
                            <Form.Control placeholder="COP $ 1.000.000" />
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={6}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="quiroz.admin" />
                            <Form.Label>Telefóno</Form.Label>
                            <Form.Control placeholder="12345678" />
                            <Form.Label>Rol</Form.Label>
                            <Form.Control placeholder="Administrador" />
                        </Stack>
                    </Col>
                </Row>
            </Form>

        </>
    )
}

export default TabAdminProfile
