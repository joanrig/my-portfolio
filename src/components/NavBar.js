import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar center'>
          <Link to='/' className="big grey">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/projects' className="big grey">Projects</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/resume' className="big grey">Resume</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/blog' className="big grey">Posts</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='https://medium.com/@joanrigdon' className="big grey">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/about' className="big grey">About</Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;
