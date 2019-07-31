import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavBar from './components/NavBar'
import Home from './components/Home'



function App() {
  return (
    <>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    </>
  );
}

export default App;
