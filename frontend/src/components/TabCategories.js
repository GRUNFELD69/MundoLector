import React, { useState, useEffect } from 'react'
import { Table, ToggleButtonGroup, ToggleButton, Modal, Button, Form, Row, Col, Stack } from 'react-bootstrap'
import { getAllCategories, deleteCategory, addCategory, updateCategory } from '../apis/CategoryCRUD';


const TabCategories = () => {
    //const { categories, activeCategory, onClick } = props
    const [categorygroup, setShowCategory] = useState([]);
    const [valueCategory, setValueCategory] = useState([]);
    const [namecategory, setNameCategory] = useState({ Nombre: '' });
    const [show, setShow] = useState(false);
    const [functioncategory, setFunctioncategory] = useState("Agregar");

    const handleClose = () => setShow(false);

    useEffect(() => {
        getAllCategories(setShowCategory);
        //setNameCategory();
    }, [])

    const handleChangeCategory = (val) => {
        setValueCategory(val);
        setShow(true);
        localStorage.setItem('id', val.id);
    };

    const handleEditCategory = (val) => {
        localStorage.setItem('id', val.id);
        nameCategory("Nombre", val.Nombre);
        setFunctioncategory("Editar");
    }

    const delCategory = (id) => {
        setShow(false);
        localStorage.removeItem('id');
        deleteCategory(id, (res) => {
            console.log("Libro eliminado");
            if (res.status === 200) {
                alert("Categoria eliminada");
            } else {
                alert("Error al eliminar categoria");
            }
        }
        );
        window.location.reload();
    };

    const nameCategory = (_campo, _valor) => {
        //version callback del setter de useState
        setNameCategory(prevState => {
            return { ...prevState, [_campo]: _valor }
        })
    }

    function handleChange(e, campo) {
        e.preventDefault();
        nameCategory(campo, e.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (functioncategory === "Agregar") {
            addCategory(namecategory, (res) => {
                console.log("Libro agregado");
                if (res.status === 200) {
                    alert("Categoria agregada");
                } else {
                    alert("Error al agregar categoria");
                }
            }
            );
        }
        else {
            var tmpCategory = localStorage.getItem('id');
            localStorage.removeItem('id');
            updateCategory(tmpCategory, namecategory, (res) => {
                if (res.status === 200) {
                    alert("Categoria editada");
                } else {
                    alert("Error al editar categoria");
                }
                setFunctioncategory("Agregar");
            });
        }
        window.location.reload();
    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>{"Esta seguro de borrar la categoria " + valueCategory.Nombre}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => delCategory(valueCategory.id)}>
                        Eliminar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Stack gap={2} className="col-md-14 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs={9}>
                            <Form.Control
                                requiered="True"
                                type="text" value={namecategory.Nombre}
                                onChange={(e) => handleChange(e, "Nombre")}
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Nueva Categoria"
                            />
                        </Col>

                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Guardar
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Categoria</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorygroup.map((result, index) => (
                            <tr key={result.id}>
                                <td>{index + 1}</td>
                                <td>{result.Nombre}</td>
                                <td>
                                    <ToggleButtonGroup name="radioeditCategories" type="radio" value={valueCategory} onChange={handleEditCategory}>
                                        <ToggleButton name={"edit" + result.Nombre} id={"edit" + result.id + result.Nombre} value={result} variant="success" >Editar</ToggleButton>
                                    </ToggleButtonGroup>
                                </td>
                                <td>
                                    <ToggleButtonGroup name="radiodelcategories" type="radio" value={valueCategory} onChange={handleChangeCategory}>
                                        <ToggleButton name={"delete" + result.Nombre} id={"delete" + result.id + result.Nombre} value={result} variant="danger" >Eliminar</ToggleButton>
                                    </ToggleButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Stack>
        </>
    )
}

export default TabCategories
