import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Sticky } from 'semantic-ui-react'

const NavBar = () => {
  return (
      <>

        <Sticky>

          <Container className="navbar">
          <br/>
          <br/>

          <div className="black center">

                <div className='navbar center'>
                  <Link to='/' className="big grey">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/projects' className="big grey">Projects</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/resume' className="big grey">Resume</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href='/blog' className="big grey">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/about' className="big grey">About</Link>
                </div>

              <br/>
              <br/>
          </div>

          </Container>
        </Sticky>
      </>
  )
}

export default NavBar;
