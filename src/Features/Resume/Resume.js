import React from 'react';
import { Container, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'


const Resume = () => {
  return (

    <>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container className="resume">
      <Link to="/files/lyness-resume.pdf" target="_blank" download className="download"><Icon name="download"/>Click to download</Link>
        <br/>
        <br/>
        <div className="center huge">
          Joan Indiana Lyness<br/><br/><br/><br/>
        </div>
        <br/>


        <div className="center big">
          <a href="mailto: joan.indiana.lyness@gmail.com" ><Popup content='email me' trigger={<i class="mail icon" />} /></a>
          <a href="https://www.linkedin.com/in/joanrigdon/"><Popup content='my LinkedIn profile' trigger={<i class="linkedin icon" />} /></a>
          <a href="https://medium.com/@joanrigdon"><Popup content='Read my Algorithms 101 series on Medium' trigger={<i class="medium icon" />} /></a>
          <a href="https://twitter.com/joan_indiana"><Popup content='Follow me on Twitter' trigger={<i class="twitter icon" />} /></a>
        </div>

        <h2 className="ui block header center blue">
          Web Developer with experience in management, teaching and journalism
        </h2>

        <p >
          Full stack web developer with nine years of experience founding and building my own technology education company, where I developed solid management skills and discovered how much fun it is to learn and teach new programming languages. I love building apps with React.js, Redux and Postgres; I've also built projects with Ruby, Rails,  JavaScript, ActiveRecord, Sinatra and mySQL. As a former journalist with experience covering national policy, I would love to work on fun ways to present statistics and other data for a political publication, public interest group or a think tank.  I live near Washington, D.C.
        </p>

        <h2 className="ui block header center blue">
          Technical Projects
        </h2>

        <p>
          <strong>Who’s Who in Congress Game, a React-Redux app using a Rails API and Postres database.<a href="https://github.com/joanrig/congress_api"> Github Back-End</a> | <a href="https://github.com/joanrig/congress_front_end">Github Front-end</a> | <a href="https://www.loom.com/share/7f2536bd3ee84514a88d96a6d242d46e">Video</a></strong><br/>Fetches data on Congress members and bills  from ProPublica, uses Semantic UI React to present data as cards. Search and sort data using logic in Ruby, JavaScript and JSX. Guess who’s who and flip a card to find out!
        </p>

        <p>
          <strong>Mars Rover Photo Browser, a React app.<a href="https://github.com/joanrig/mars_rover_pics"> Github</a>  | <a href="https://mars-rover-staging.herokuapp.com/">Demo</a></strong><br/>Browse more than 360,000 photos from NASA's Mars Rover. Built with React.js/ JavaScript/ JSX and Semantic React UI.
        </p>

        <p>
          <strong>Vacation Bidder, a Rails web app for managing bucket lists, and vacations<a href="https://github.com/joanrig/vacation_bidder"> Github </a> | <a href="https://www.loom.com/share/b46f1f2896d64e1d9f90be2968037326"> Video </a></strong><br/>
          Built with Rails and PostGres on the back end and Rails, Javascript, jQuery, Bootstrap and CSS on the front end.
          Uses OAuth and Devise to allow third-party login via Github. Includes forms built in Javascript and forms built in Rails.
        </p>

        <p>
          <strong>Space Missions, a Command Line Interface program that serves up data on Jet Propulsion Laboratory Space Missions<a href="https://github.com/joanrig/space_missions2.0"> Github </a> | <a href="https://www.loom.com/share/4c54a64adebd4bf3afb0913da06649df">Video</a> </strong><br/>Uses the Nokogiri gem to scrape data from the JPL website, uses Ruby to search and sort data.
        </p>

        <p>
          <strong>Hog-Iron,  A group project : Harry Potter website. Built with Rails and ActiveRecord.<a href= "https://github.com/joanrig/Hog-Iron"> Github </a> | <a href="https://hog-iron.herokuapp.com/"> Demo </a></strong><br/>I contributed Ruby logic for sorting users into houses; and used Bootstrap to style most of the app’s pages.
        </p>

        <h2 className="ui block header center blue">
          Work Experience
        </h2>
        <p>
        <strong>The Great Adventure Lab, Silver Spring, Md., Founder and managing partner,</strong> Aug. 2010 to present<br/>
          Bootstrapped an after school enrichment company with an initial investment of $3,000 in netbooks and robotics kits. Grew revenues to more than $400k in two years during a recession. Expanded to offer camps, events and birthday parties. Hired staff, recruited partners, set up processes so the company mostly runs without me. We’ve taught more than 20k kids how to program.
        </p>
        <p>
          <strong>Joan Indiana Rigdon Freelance, Silver Spring, Md., Freelance magazine writer and columnist,</strong> Dec. 2001 - April 2012<br/>
          Wrote cover stories about IT, gun rights, education, copyright law, biotechnology, management and other topics for magazines including ForbesWoman, Washington Lawyer and CIO Magazine.
        </p>
        <p>
          <strong>Red Herring Magazine, San Francisco, Ca, Section Editor,</strong> April 2000 - Sep. 2001<br/>
          Hired reporters and freelancers; produced a bi-weekly section about management strategies.
        </p>
        <p>
          <strong>The Wall Street Journal Online, multiple countries, Columnist,</strong> May 1997 - August 1999<br/>
          Wrote bi-weekly columns about the state of internet technology around the world while bicycling through 26 countries in 26 months, including a month-long ride from Lhasa, Tibet to Everest Base Camp.
        </p>
        <p>
          <strong>The Wall Street Journal, Pittsburgh and San Francisco. Staff Writer,</strong> September 1990 to May 1997<br/>
          Wrote front-page stories and hundreds of features and news stories about topics including technology, management and race.
        </p>

        <h2 className="ui block header center blue education">
          Education and Personal
        </h2>

        <p>
          <strong>current courses:</strong> Node.js
          <strong>Flatiron School,</strong> graduated July 2019 / Full Stack Web Development, Ruby on Rails and JavaScript full-time online program<br/>
          <strong>University of California, Berkeley, Master’s of Journalism,</strong> May 1989<br/>
          <strong>Boston College, B.A. English,</strong> May 1986, graduated cum laude in three years while working<br/>
          <strong>Languages:</strong> Conversational French and Spanish, can order more beer in Bahasa Indonesian<br/>
          <strong>Fun:</strong> coding, canoeing, long-distance cycling, knitting, Coursera courses<br/>
        </p>
        <br/>

      </Container>
      <br/>
      <br/>
    </>

  )
}

export default Resume;
