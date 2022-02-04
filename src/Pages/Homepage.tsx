import * as React from 'react';
// import './App.css';
import { GoalList } from '../Components/GoalList';

// import { Link } from 'react-router-dom'
//  create helper function to get all goals! 
// import { getGoals }  from "./api";
// import GoalCard from './GoalCard';
// create new function, assign get to variable
//  this functio SHOULD list out and link to all of goals posted 

export function Homepage(){
	// const  goalsDisplayed = getGoals();
	return(
		<div>
            <h1> affirm.me (THIS IS THE HOME PAGE)</h1>
			<h2>User's GOALS</h2>
			< GoalList />
			<nav>
				{/* <ul>
					{goalsDisplayed.map(({ id, title}: GoalCard) => (
						<li key={id}>
							<Link to={`goal/${id}`}>{title}</Link>
						</li>
					))}
				</ul> */}
			</nav>
		</div>
	)
};  