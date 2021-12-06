import React from 'react'
import { Card, Button, Row, Container, Col} from 'react-bootstrap'
import Atlantis from '../assets/img/portadas/Atlantis.jpg';
import DejemosHuella from '../assets/img/portadas/DejemosHuella.jpg';
import ElQuintoInfierno from '../assets/img/portadas/elquintoinfierno.jpg';

const LandingCards = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={4} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Atlantis} />
                            <Card.Body>
                                <Card.Title>Categoría: Ciencia Ficción</Card.Title>
                                <Card.Text>
                                La trama empieza con el descubrimiento de seis pergaminos del antiguo Egipto; el séptimo se encontró más tarde. Caen en manos de Platón y éste, ayudado por su discípulo Aristóteles, transcribe los seis al griego.
                                </Card.Text>
                                <Button variant="primary">Leer mas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={DejemosHuella} />
                            <Card.Body>
                                <Card.Title>Categoria: Documental</Card.Title>
                                <Card.Text>
                                A través de las historias de diez organizaciones o ciudadanos en teoría “comunes”, el libro retrata la mejor esencia de los costarricenses, esos que rasgaron sus viejas vestiduras para ataviarse con la proactividad, la inteligencia emocional, el buen orgullo, la cooperación, la solidaridad, la disciplina y la templanza
                                </Card.Text>
                                <Button variant="primary">Leer mas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ElQuintoInfierno} />
                            <Card.Body>
                                <Card.Title>Categoria: Suspenso</Card.Title>
                                <Card.Text>
                                Los hermanos irlandeses Connor y Murphy McManus viven y trabajan en Boston hasta que se convierten, por casualidad, en los santos de un barrio de la ciudad al matar a unos mafiosos rusos. Ahora deberán acabar con toda la escoria de la ciudad.
                                </Card.Text>
                                <Button variant="primary">Leer mas</Button>
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>
            </Container>
        </>
    )
}

export default LandingCards
