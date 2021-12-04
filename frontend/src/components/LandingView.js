import React from 'react'
import { Container, Row, Figure, Col } from 'react-bootstrap';
import lanzamiento3 from '../assets/img/lanzamiento-libro3.png';
import lanzamiento4 from '../assets/img/lanzamiento-libro4.png';

const LandingView = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} >
                        <Figure>
                            <Figure.Image
                                width={600}
                                height={600}
                                alt="600x600"
                                src={lanzamiento3}
                            />
                        </Figure>
                    </Col>
                    <Col sm={6} >
                        <Figure>
                            <Figure.Image
                                width={600}
                                height={600}
                                alt="600x600"
                                src={lanzamiento4}
                            />
                        </Figure>
                    </Col>                  
                </Row>
            </Container>
        </>
    )
}

export default LandingView
