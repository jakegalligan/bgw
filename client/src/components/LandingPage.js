import React, {useEffect, useState} from 'react';
import Typing from 'react-typing-animation';
import {Col, Row, Container} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Overdrive from 'react-overdrive';
import {Redirect} from "react-router";


export const LandingPage = () => {
    //initialize state for redirect
    const[redirect,setRedirect] = useState(false);
    
    //after x seconds redirect to the home page
    useEffect(()=> {
        setTimeout(() => {
            setRedirect(true);
        }, 5000);
    })

    return (
        <div>
            <Container>
                <Row>
                <Overdrive id="page-title">
                <Typing speed={150}>
                    <span id="webpage-title">blackgra/eywhite</span>
                        <Typing.Backspace count={16} />
                        <span>b/g/w</span>
                </Typing>
                </Overdrive>

                </Row>
                <Row>
                    <Col>
                        baby
                    </Col>
                    <Col>
                        hah
                    </Col>
                    <Col>
                        smell cologne
                    </Col>
                </Row>
            </Container>
            {redirect?<Redirect to ="/Home" />: ''}
}
        </div>
    )
}