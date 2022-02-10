// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import NewGoalForm from './components/NewGoalForm';
import { GoalsList } from './components/GoalList';
import AffirmationMessage from './components/AffirmationMessage';

function App() {

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
            <li className="nav-item">
              <Link to="/goalform" className="nav-link">
                add a goal
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<GoalsList />} />
          <Route path="/goalform" element={<NewGoalForm/>}/>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/affirmation" element={<AffirmationMessage/>} />
        </Routes>  
      </Router>
    </div>
  )};

export default App;