import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const TableBook = (props) => {
  return (
    <>
            <Modal show={props.show} >
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>{"Esta seguro de eliminar " + props.value.Titulo}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => props.delBook(props.value.id)}>
                        Eliminar
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>      
    </>
  )
}

export default TableBook
