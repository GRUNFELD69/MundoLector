import React from 'react'
import { Figure, Table, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

const TabBooks = (props) => {
    return (
        <>

            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Portada</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.bookCollection.map((result, index) => (
                        <tr key={result.Titulo}>
                            <td>{index + 1}</td>
                            <td>
                                <Figure>
                                    <Figure.Image
                                        width={85}
                                        height={90}
                                        alt="85x90"
                                        src={result.photoPortada}
                                    />
                                </Figure>
                            </td>
                            <td>{result.Precio}</td>
                            <td>{result.unDisp}</td>
                            <td>
                                <ToggleButtonGroup name="radioeditBooks" type="radio" value={props.value} onChange={props.handleEdit}>
                                    <ToggleButton name={"edit" + result.Titulo} id={"edit" + result.id + result.Titulo} value={result} variant="success" >Editar</ToggleButton>
                                </ToggleButtonGroup>
                            </td>
                            <td>
                                <ToggleButtonGroup name="radiodelBooks" type="radio" value={props.value} onChange={props.handleChange}>
                                    <ToggleButton name={"delete" + result.Titulo} id={"delete" + result.id + result.Titulo} value={result} variant="danger" >Eliminar</ToggleButton>
                                </ToggleButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </>
    )
}

export default TabBooks
