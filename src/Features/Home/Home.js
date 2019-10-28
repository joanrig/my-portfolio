import React from 'react';
import FerrisPic from './FerrisPic'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <Link to='/projects'><FerrisPic /></Link>
    </>
  )
}
export default Home;
