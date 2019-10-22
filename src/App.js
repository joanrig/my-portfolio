import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import ProjectsContainer from './containers/ProjectsContainer'
import Resume from './components/Resume'
import About from './components/About'
import Blog from './components/Blog'



function App() {
  return (
    <>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={ProjectsContainer} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    </>
  );
}

export default App;
