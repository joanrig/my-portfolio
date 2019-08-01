import React from 'react';
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'


const About = () => {
  return (
    <Container className="about">
      <NavBar />
      <br/>
      <br/>
      <h1 className="center massive">
        Hire Me!
      </h1>
      <br/>
      <br/>
      <Image src= "https://tinyurl.com/joanrig-pic" floated="left"/>
      <p>
        My name is Joan Indiana Lyness. I'm a <a href="http://joanrigdon.com/">formal journalist</a> (wrote under the name Joan Indiana Rigdon for The Wall Street Journal, Red Herring, ForbesWoman and others). During that time I spent two years cycling around the world <a href="http://online.wsj.com/public/resources/documents/info-wsj10forgotten.html">(and wrote about it for The Wall Street Journal Online)</a>. As for the last 10 years? I spent most of them building and running my own afterschool STEM company, where fabulous instructors teach elementary school kids robotics and programming (and other fun things like Storybook Science!).
      </p>
      <br/>
      <p>
        It was a lot of fun teaching kids the basics of programming. When I saw how good even 8-year-olds could be, I thought maybe I should learn about it myself! Early this year, I enrolled in the full-time, online software engineering program at The Flatiron School. I just graduated (July 2019). I'm using this site to showcase some of the projects I created at Flatiron.
      </p>
      <br/>
      <p>
        <strong>Now I'm looking for my first job as a web developer</strong> near Washington, D.C. where I live (Maryland side). Here's my <Link to="./resume">Resume!</Link>
      </p>
      <br/>
      <br/>
      <Image src="https://www.smartertravel.com/uploads/2018/03/Hero-23-1400x500.png"/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </Container>

  )
}

export default About;
