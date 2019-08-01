import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Resume from './components/Resume'
import About from './components/About'



function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    </>
  );
}

export default App;
