import React from 'react';
import Overdrive from 'react-overdrive';
import {Col, Row, Container} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const Navbar = () => {

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Row>
                        <Col>
                            <Overdrive id="page-title">
                                <span className="header-bar-title">b/g/w</span>
                            </Overdrive>
                        </Col>
                        <Col>
                            Music
                        </Col>
                        <Col>
                            Sports
                        </Col>
                        <Col>
                            Culture
                        </Col>
                    </Row>
                </Toolbar>
            </AppBar>
        </Container>
    )
}