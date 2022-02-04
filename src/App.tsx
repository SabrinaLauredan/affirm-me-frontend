import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Homepage } from './Pages/Homepage';
import About from './Pages/About';
import Settings from './Pages/Settings';
import ErrorPage from './Pages/ErrorPage';
import { GoalList } from './Components/GoalList';
// import Goal from './Pages/GoalView';

export default function App() {
	// const backendURL = process.env["REACT_APP_BACKEND_URL"]
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
			{/* < GoalList /> */}
			<div> insert footer </div>
		</Router>
	);
}
