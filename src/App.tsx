import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
// import NewGoalForm from './components/NewGoalForm';
// import { GoalsList } from './components/GoalsList';
// import AffirmationMessage from './components/AffirmationMessage';

import NewGoalForm from './components/NewGoalForm';
import GoalsListSabrina from './components/GoalsListSabrina';
import Goal from './components/Goal';

// function App() {

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            affirm.me
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                about
              </Link>
            </li>
            {/*  */}
            <li className="nav-item">
              <Link to="/addgoal" className="nav-link">
                add a goal
              </Link>
              {/*  */}
            </li>
            <li className="nav-item">
              <Link to="/goals" className="nav-link">
                my goals
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} />  */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/affirmation" element={<AffirmationMessage />} /> */}
          {/* <Route path="/goals" element={<GoalsList />} /> */}
          {/* <Route path="/goalform" element={<NewGoalForm/>}/> */}
          {/* */}
          <Route path="/" element={<Home />} /> 
            {/* <Route path= "/" element={<GoalsListSabrina />}/> */}
          <Route path="/goals" element={<GoalsListSabrina />}/>
          <Route path="/addgoal" element={<NewGoalForm />}/>
          <Route path="/goals/:id" element={<Goal />}/>
          {/*  */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>  
      </Router>
    </div>
  )};

export default App;