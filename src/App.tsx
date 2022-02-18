// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import NewGoalForm from './Components/NewGoalForm';
import GoalsList from './Components/GoalsList';
import AffirmationMessage from './Components/AffirmationMessage';
import NavBar from './Components/navBar';

function App() {

  return (
    <div>
      <Router>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
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
              <Link to="/goals" className="nav-link">
                my goals
              </Link>
            </li>
          </div>
        </nav> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/affirmation" element={<AffirmationMessage />} />
          <Route path="/goals" element={<GoalsList />} />
          <Route path="/goalform" element={<NewGoalForm />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;