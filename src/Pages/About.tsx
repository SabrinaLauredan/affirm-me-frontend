import React from "react";
import { Accordion, Stack } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import mascot from '../assets/mascot.jpg'

const About = () => {
    return (
        <div>
            <Stack direction="horizontal" gap={3}>
                <div className="bg-light border">
                    <div style={{ width: 500, padding: 30 }}>
                        <Image fluid rounded src={mascot} alt="dancing-img">
                        </Image>
                    </div>
                </div>
                <div className="yr" />
                <div className="bg-light border">
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>created by</Accordion.Header>
                            <Accordion.Body>
                                aisha arigbabu, asli athman, and sabrina lauredan
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
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
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>source code</Accordion.Header>
                            <Accordion.Body>
                                <li>frontend</li>
                                <li>backend</li>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                {/* <div className="bg-light border">
                    <h1>about</h1>
                </div> */}
            </Stack>
        </div>
    )
}

export default About;