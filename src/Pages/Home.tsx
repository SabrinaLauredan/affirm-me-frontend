import React from "react";
import { useNavigate } from "react-router-dom";
import GoalsList from "../Components/GoalsList";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "../Components/navBar";

const Home = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Row>
                {/* <Col xs={{ order: 1 }}> */}
                    <NavBar /> 
            </Row>
            <Row>
                <Col md={{ offset: 3 }}> 
                    <div className='p-3 d-flex justify-content-center'>
                        <Button size="lg"
                            onClick={() => {
                                navigate('/goalform');
                            }}
                        >
                            +
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <GoalsList />
                    </div>
                </Col>
                {/* <Col xs={{ order: 12 }}>  */}
            </Row>
        </Container>
    )
};

export default Home;






