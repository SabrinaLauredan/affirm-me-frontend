import React from "react";
import { Accordion } from "react-bootstrap";
// import dancing from '../assets/dancing.png';
import mascot from '../assets/mascot.jpg'

// add snippet for setting up typescript component w basic text message



const About = () => {

    return (
        <div>
            {/* <h1>about</h1> */}
            <br />
            <img className="img-fluid" src={mascot} alt="dancing-img" />
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>team members</Accordion.Header>
                    <Accordion.Body>
                        Aisha, Asli, and Sabrina
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>inspiration</Accordion.Header>
                    <Accordion.Body>
                            The idea is based partly on this reddit page for people who are trying to
                        moderate or completely stop drinking called 'I Will Not Drink With You Today (IWNDWYT)' where strangers post about their
                        journey into sobriety. A lot of times people post when trying again after falling off the wagon and get messages of
                        encouragement from strangers in a similar positions as them (they end these messages with IWNDWYT, to say 'hey, I will
                        not drink with you today' we are in this together!!!) Everything is easier when we do it together, which is what I hope
                        this app will encourage people to do: challenge and support each other through successes and failures.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>github</Accordion.Header>
                    <Accordion.Body>
                        <li>frontend</li>
                        <li>backend</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default About;