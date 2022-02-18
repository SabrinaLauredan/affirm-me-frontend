import React from "react";
import { useNavigate } from "react-router-dom";
import GoalsList from "../Components/GoalsList";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                    <Button
                        onClick={() => {
                            navigate('/goalform');
                        }}
                    >+ goal</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md= 'auto'>
                    <GoalsList />
                </Col>
            </Row>
        </Container>
    )
};

export default Home;






