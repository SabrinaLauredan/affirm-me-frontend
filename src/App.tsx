import './App.css';
import axios from "axios";

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import NewGoalForm from './components/NewGoalForm';


function App() {
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
			<Link to="/"> Home </Link>
			<Link to="/about"> About </Link>
		</nav>
		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<ErrorPage />} />
		</Routes>    

    <NewGoalForm></NewGoalForm>
    
	</Router>

	);

}

export default App;