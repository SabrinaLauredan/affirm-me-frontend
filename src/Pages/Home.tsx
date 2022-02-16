import React from "react";
import { useNavigate } from "react-router-dom";
import GoalsList from "../Components/GoalsList";
import { Button } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Button 
                onClick={() => {
                    navigate('/goalform');
                }}
            >
                +
            </Button>
            <GoalsList />
        </div>
    )
}

export default Home;


