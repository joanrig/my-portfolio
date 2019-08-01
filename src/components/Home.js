import React from 'react';
import { Image } from 'semantic-ui-react'
import ferris from './ferris.jpg'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <Link to='/projects'><Image src={ferris} /></Link>
    </>
  )
}
export default Home;
