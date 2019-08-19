import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar center'>
          <Link to='/' className="big grey">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/projects' className="big grey">Projects</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/resume' className="big grey">Resume</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/about' className="big grey">About</Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;