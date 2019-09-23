import React from 'react';
import Typing from 'react-typing-animation';
import {Col, Row, Container} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

export const LandingPage = () => {
    return (
        <div>
            <Container>
                <Row>
                <Typing speed={150}>
                    <span id="longtitle-landingpage">blackgra/eywhite</span>
                        <Typing.Backspace count={15} />
                        <span>/g/w</span>
                </Typing>
                </Row>
                <Row>
                    <Col>
                        yeah
                    </Col>
                    <Col>
                        hah
                    </Col>
                    <Col>
                        smell cologne
                    </Col>
                </Row>
            </Container>
        </div>
    )
}