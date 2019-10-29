import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Features/Home/Home'
import ProjectsContainer from './Features/Projects/ProjectsContainer'
import Resume from './Features/Resume/Resume'
import About from './Features/About/About'
import BlogContainer from './Features/Blog/BlogContainer'
import Carousel from './Features/Carousel'



function App() {
  return (
    <>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={ProjectsContainer} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/about' component={About} />
          <Route exact path="/carousel" component={Carousel} />
        </div>
      </Router>
    </>
  );
}

export default App;
