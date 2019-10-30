import React from 'react';
import FerrisPic from './FerrisPic'
import { Link } from 'react-router-dom'



const Home = () => {

  return (

    <Link to="./projects">]
      <br/>
      <h1 className="grey center">I'm Joan. Let's build something fabulous togher.</h1>
      <h1 className="grey center">my recent work</h1>

      <Link to='/projects'><FerrisPic /></Link>
      <br/>
    </Link>
  )
}
export default Home;
