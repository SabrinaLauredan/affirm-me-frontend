import * as React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import NewGoalForm from './components/NewGoalForm';
// import { GoalList } from './components/GoalList';
// import Goal from './Pages/GoalView';

function App() {

  return (
    <Router>
      <nav> 
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        {/* <Link to="/settings">Settings</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/goalform" element={<NewGoalForm/>}/>
      </Routes>  
      {/* < GoalList />   */}
      {/* <NewGoalForm></NewGoalForm> */}
  
    </Router>
  )};

export default App;