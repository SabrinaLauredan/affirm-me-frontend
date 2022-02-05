import React from "react";
import { useNavigate } from "react-router-dom";
import { GoalList } from "../components/GoalList";

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
		< GoalList /> 
    </div>
    )}

export default Home;


// SABRINA'S ORIGINAL CODE FROM THE HOMEPAGE PAGE THAT I DELETED AND MERGED INTO THE HOME PAGE

// import * as React from 'react';
// // import './App.css';
// import { GoalList } from '../Components/GoalList';

// // import { Link } from 'react-router-dom'
// //  create helper function to get all goals! 
// // import { getGoals }  from "./api";
// // import GoalCard from './GoalCard';
// // create new function, assign get to variable
// //  this functio SHOULD list out and link to all of goals posted 

// export function Homepage(){
	
    
// // const  goalsDisplayed = getGoals();
// 	return(
// 		<div>
//             <h1> affirm.me (THIS IS THE HOME PAGE)</h1>
// 			<h2>User's GOALS</h2>
// 			<li>Displays all Goals via GoalList Component below.
// 			GoalList should comprise of GoalCards which each display one goal. </li>
// 			< GoalList /> 
// 			<nav>
// 				{/* <ul>
// 					{goalsDisplayed.map(({ id, title}: GoalCard) => (
// 						<li key={id}>
// 							<Link to={`goal/${id}`}>{title}</Link>
// 						</li>
// 					))}
// 				</ul> */}
// 			</nav>
// 		</div>
// 	)
// };  