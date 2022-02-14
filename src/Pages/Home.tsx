import React from "react";
import { useNavigate } from "react-router-dom";
import Goal from "../components/Goal";
// import { GoalsList } from "../components/GoalsList";
import GoalsListSabrina from "../components/GoalsListSabrina";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/addgoal');
                }}
            >
                +
            </button>
            <h1> affirm.me (THIS IS THE HOME PAGE)</h1>
            {/* < GoalsList /> */}
            < GoalsListSabrina />
            <Goal />
        </div>
    )
}

export default Home;


