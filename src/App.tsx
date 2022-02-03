import './App.css';
import axios from "axios";

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';


function App() {
  const backendURL = process.env["REACT_APP_BACKEND_URL"]

  const createNewGoal = (response: any) => {
    axios
      .post(`${backendURL}/goals`, {
        title: response.title,
        description: response.description,
        createdAt: response.createdAt
      })
      .then((response) => {
        console.log(
          `Success adding goal: ${JSON.stringify(response.data)}`
        );
        // fetchGoalsForList();
      })
      .catch((error) => {
        console.log(`Error adding new goal: ${error}`);
      });
  };


	return (
	<Router>
		<nav> 
			{/* //we can use React Link component in place of a tags */}
			<Link to="/"> Home </Link>
			<Link to="/about"> About </Link>
		</nav>
		{/* // ^ displays across all pages, the only thing that changes is everything below  */}
		<Routes>
			{/* a route is declared using a Route component */}
			<Route path="/" element={<Home />} /> 
      {/* "/" is the homepage  */}
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<ErrorPage />} />
      {/* must be the last route, "/*" says every /example, besides the one defined above */}
		</Routes>    

	</Router>

	);

}

export default App;