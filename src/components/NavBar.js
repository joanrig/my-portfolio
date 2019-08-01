import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar center'>
          <Link to='/' ><Button size='massive' color='red'>Home</Button></Link>
          <Link to='/projects' ><Button size='massive' color='blue'>Projects</Button></Link>
          <Link to='/resume' ><Button size='massive' color='green'>Resume</Button></Link>
          <Link to='/about' ><Button size='massive' color='yellow'>About</Button></Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;
