import React from "react";
import { useNavigate } from "react-router-dom";
import GoalsList from "../components/GoalsList";
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
            {/* <h1> affirm.me (THIS IS THE HOME PAGE)</h1> */}
            < GoalsList />
        </div>
    )
}

export default Home;


