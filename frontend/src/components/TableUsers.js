import React, { useState, useEffect } from 'react'
import { Table, ToggleButtonGroup, ToggleButton, Modal, Button, Stack } from 'react-bootstrap'
import { getAllUsers, deleteUser } from '../apis/UserCRUD';


const TableUsers = () => {
    //const { categories, activeCategory, onClick } = props
    const [usergroup, setShowCategory] = useState([]);
    const [valueUser, setValueUser] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        getAllUsers(setShowCategory);
        //setNameCategory();
    }, [])

    console.log(usergroup);

    const handleChangeUser = (val) => {
        setValueUser(val);
        setShow(true);
        localStorage.setItem('id', val.id);
    };

    const handleEditUser = (val) => {
        localStorage.setItem("eUser", JSON.stringify(val));
        window.location.href = '/customerprofile';
    }

    const delUser = (id) => {
        setShow(false);
        localStorage.removeItem('id');
        deleteUser(id, (res) => {
            console.log("Usuario eliminado");
            if (res.status === 200) {
                alert("Usuario eliminado");
            } else {
                alert("Error al eliminar usuario");
            }
        }
        );
        window.location.reload();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>{"Esta seguro de borrar el usuario " + valueUser.Nombre}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => delUser(valueUser.id)}>
                        Eliminar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Stack gap={2} className="col-md-14 mx-auto">
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>username</th>
                            <th>Nombre</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usergroup.map((result, index) => (
                            <tr key={result.id}>
                                <td>{index + 1}</td>
                                <td>{result.nombreUsuario}</td>
                                <td>{result.Nombre}</td>
                                <td>
                                    <ToggleButtonGroup name="radioeditUsers" type="radio" value={valueUser} onChange={handleEditUser}>
                                        <ToggleButton name={"edit" + result.Nombre} id={"edit" + result.id + result.Nombre} value={result} variant="success" >Editar</ToggleButton>
                                    </ToggleButtonGroup>
                                </td>
                                <td>
                                    <ToggleButtonGroup name="radiodelUsers" type="radio" value={valueUser} onChange={handleChangeUser}>
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

export default TableUsers
