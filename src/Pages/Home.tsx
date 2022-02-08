import React from "react";
import { useNavigate } from "react-router-dom";
import { GoalsList } from "../components/GoalList";

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
        <h1> affirm.me (THIS IS THE HOME PAGE)</h1>
		<h2>User's GOALS</h2>
		<li>Displays all Goals via GoalList Component below.
		GoalList should comprise of GoalCards which each display one goal. </li>
		< GoalsList /> 
    </div>
    )}

export default Home;


