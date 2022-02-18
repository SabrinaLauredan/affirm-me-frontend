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
                <Col xs> 
                <Button
                    onClick={() => {
                        navigate('/goalform');
                    }}
                >
                    +
                </Button>
                </Col>
                <Col xs={{ order: 12 }}> 
                    <GoalsList />
                </Col>
                <Col xs={{ order: 1 }}>
                    <NavBar /> 
                </Col>
            </Row>
        </Container>
    )
};

export default Home;






