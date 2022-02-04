import * as React from 'react';
import './App.css';
import axios from "axios";

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Settings';
import About from './Pages/About';
import Settings from './Pages/Settings';
import ErrorPage from './Pages/ErrorPage';
import NewGoalForm from './components/NewGoalForm';

import { GoalList } from './Components/GoalList';
// import Goal from './Pages/GoalView';

export default function App() {
   // const backendURL = process.env["REACT_APP_BACKEND_URL"]

  // interface Input {
  //   data: {
  //     title: string,
  //     description?: string,
  //     createdAt?: string
  //   }
  // }

  // function createNewGoal(input: Input["data"]) {
  //   axios
  //     .post(`${backendURL}/goals`, {
  //       title: input.title,
  //       description: input.description,
  //       createdAt: input.createdAt
  //     })
  //     .then((response) => {
  //       console.log(
  //         `Success adding goal: ${JSON.stringify(input)}`
  //       );
  //       // fetchGoalsForList();
  //     })
  //     .catch((error) => {
  //       console.log(`Error adding new goal: ${error}`);
  //     });
  // };
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/settings">Settings</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/settings" element={<Settings />} />
				{/* <Route path='/goal/:goalId' element={<Goal />} /> */}
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
      <NewGoalForm></NewGoalForm>
			< GoalList />
			<div> insert footer </div>
		</Router>
	);
}
