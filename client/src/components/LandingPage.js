import React, {useEffect, useState} from 'react';
import Typing from 'react-typing-animation';
import {Col, Row, Container} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Overdrive from 'react-overdrive';
import {Redirect} from "react-router";


export const LandingPage = () => {
    //initialize state for redirect
    const[redirect,setRedirect] = useState(false);
    //initialize the intial text that appears on the page
    //this is done instead of entering text directly into the field in order to better utilize the text value in a function
    const[firstTypedText,setFirstTypedText] = useState("blackgra/eywhite");
    const[secondTypedText,setSecondTypedText] = useState("/g/w");
    //this will store the rate(in milliseconds) that the typing component will type characters
    const[millisecondsPerCharacter, setMillisecondsPerCharacter] = useState(50)
   //state that when set to true will render the descriptor text
    const[renderDescriptorText,setRenderDescriptorText] = useState(false);

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
                    <Col>
                        <Overdrive id="page-title" animationDelay={5}>
                        <Typing onFinishedTyping={() =>setRenderDescriptorText(true)}>
                            <span id="webpage-title">{firstTypedText}</span>
                            <Typing.Backspace count={firstTypedText.length -1} />
                            <span>{secondTypedText}</span>
                        </Typing>
                        </Overdrive>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderDescriptorText?<Typing>
                            <span id="descriptor-text">Music/Sports/Culture</span>
                        </Typing>
                        : ''}
                    </Col>
                </Row>
            </Container>
            {redirect?<Redirect to ="/home" />: ''}
        </div>
    )
}