import React from "react";
import NewGoalForm from "../components/NewGoalForm";
import { useNavigate } from "react-router-dom";

// add snippet for setting up typescript component w basic text message

const Home = () => {
    const navigate = useNavigate()

    return (
    <div>
        <button
            onClick={() => {
                navigate('/goalform');
            }}
        
        >
            +
        </button>
    </div>

    )
}

export default Home;