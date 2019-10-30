import React from 'react';
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import ScrollText from 'react-scroll-text'
import joanrig from './joanrig.jpg';
import Fade from './Fade'



const About = () => {
  return (
    <>
      <NavBar />
      <Container className="about">
        <br/>
        <br/>
        <ScrollText>
          <h1 className="center massive">
            Hire Me!
          </h1>
        </ScrollText>

        <br/>
        <br/>
        <Image height={200} src={joanrig} floated="right"/>
        <p>
          My name is Joan Indiana Lyness. I'm a <a href="http://joanrigdon.com/">former journalist</a> (wrote under the name <a href="http://www.joanrigdon.com">Joan Indiana Rigdon</a> for <i>The Wall Street Journal</i>, <i>Red Herring</i>, <i>ForbesWoman</i> and others). During that time I spent two years cycling around the world <a href="https://www.wsj.com/articles/SB867163598500460000">(and wrote about it for The Wall Street Journal Online)</a>. As for the last 10 years? I spent most of them building and running my own afterschool STEM company, where fabulous instructors teach elementary school kids robotics and programming (and other fun things like Storybook Science!).
        </p>
        <br/>
        <p>
          It was a lot of fun teaching kids the basics of programming. When I saw how good even 8-year-olds could be, I thought maybe I should learn more about it myself! This summer, I graduated from the full-time, online software engineering program at The Flatiron School. I'm using this site to showcase some of the projects I created at Flatiron.
        </p>
        <br/>
        <p>
          <strong>Now I'm looking for my first job as a web developer</strong> near Washington, D.C. where I live (Maryland side). Here's my <Link to="./resume">Resume!</Link>
        </p>
        <br/>
        <br/>
        <Image src="https://images.unsplash.com/photo-1554438666-8b9c968821a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
        <div className="right">
          <h6>Photo by <a href="https://unsplash.com/@riddywankenobi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ridwan Meah</a> on <a href="http://www.unspalsh.com">Unsplash</a></h6>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Finally, here's solid evidence of my management skills. Notice how I motivate, delegate and redirect while refraining from taking over, so my workers can learn from their own mistakes. </p>
        <br/>
        <iframe title="teamwork" src="https://player.vimeo.com/video/2529127" width="640" height="483" frameborder="0" allow="autoplay; fullscreen" allowfullscreen float="right"></iframe>
        <p><a href="https://vimeo.com/2529127">Teamwork</a> from <a href="https://vimeo.com/user1040349">Eric Lyness</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <br/>
        <br/>

      </Container>
    </>

  )
}

export default About;
