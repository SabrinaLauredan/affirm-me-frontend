import React from "react";
import { useNavigate } from "react-router-dom";
import GoalsList from "../Components/GoalsList";
import { Container, Button } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Container>
                <Button
                    onClick={() => {
                        navigate('/goalform');
                    }}
                >
                    +
                </Button>
                {/* <h1> affirm.me (THIS IS THE HOME PAGE)</h1> */}
                < GoalsList />

            </Container>
            
        </div>
    )
}

export default Home;


