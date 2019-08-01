import React from 'react';
import { Container } from 'semantic-ui-react'


const Resume = () => {
  return (

    <Container>
      <br/>
      <br/>
      <div className="center huge">
        <h1>Joan Indiana Lyness</h1>
      </div>
      <h1 className="ui block header center blue">
        Web Developer with management and teaching experience
      </h1>

      <p>
        Full stack web developer with nine years of experience founding and building my own technology education company, where I developed solid management skills and discovered how much fun it is to learn and teach new programming languages. With experience in Ruby, Rails, JavaScript, and React, I am looking forward to managing entry-level developers.
      </p>

      <h1 className="ui block header center blue">
        Flatiron Technical Projects
      </h1>


      <p>
        <strong>Who’s Who in Congress Game Github: Back-End  Front-end  | Demo A React-Redux app using a Rails API and Postres database</strong><br/>Fetches data on Congress members and bills  from ProPublica, uses Semantic UI React to present data as cards. Search and sort data using logic in Ruby, JavaScript and JSX, guess who’s who, flip a card to find out.
      </p>



      <p>
        <strong>Vacation Bidder- Github | A Rails web app for managing bucket lists, and vacations</strong><br/>
        Built with Rails and PostGres on the back end and Rails, Javascript, jQuery, Bootstrap and CSS on the front end.
        Uses OAuth and Devise to allow third-party login via Github. Includes forms built in Javascript and forms built in Rails.
      </p>

      <p>
        <strong>Space Missions - Github |A Command Line Interface program that serves up data on Jet Propulsion Laboratory Space Missions</strong><br/>Uses the Nokogiri gem to scrape data from the JPL website, uses Ruby to search and sort data.
      </p>



      <p>
        <strong>Hog-Iron- Github | Demo A group project : Harry Potter website. Built with Rails and ActiveRecord.</strong><br/>I contributed Ruby logic for sorting users into houses; and used Bootstrap to style most of the app’s pages.
      </p>

      <h1 className="ui block header center blue">
        Work Experience
      </h1>









      <br/>




    </Container>

  )
}

export default Resume;
