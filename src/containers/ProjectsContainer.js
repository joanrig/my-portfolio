import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard.js'


class Projects extends Component {

  render(){

    let congress = {
      id: 1,
      name: "Who's Who in Congress",
      type: "solo",
      tools: [
        "Rails API",
        "React",
        "Redux",
        "JavaScript",
        "Semantic React UI"
      ],
      github: {
          frontEnd: "https://github.com/joanrig/congress_front_end",
          backEnd: "https://github.com/joanrig/congress_api",
          mono: ""
        },
      video: "https://www.loom.com/share/7f2536bd3ee84514a88d96a6d242d46e",
      demo: "",
      notes: "A guessing game about Who's Who in Congress",
      blogPosts: [
        {
          title: "Hey, Mr. Postman",
          link: "https://medium.com/@joanrigdon/hey-mr-postman-f30b9662a786"
        },
        {
          title: "Seeding your database from an external API",
          link: "https://medium.com/@joanrigdon/rails-api-project-part-2-the-art-of-seeding-256a21747ab7"
        },
        {
          title: "Adding a React-Redux front-end",
          link: "https://medium.com/@joanrigdon/rails-api-project-part-3-adding-a-front-end-with-react-redux-be6ad25865d6"
        }
      ]
    }

    let vacationBidder = {
      id: 2,
      name: "Vacation Bidder",
      type: "solo",
      tools: [
        "Ruby on Rails",
        "Javascript",
        "Bootstrap"
      ],
      github: {
          mono: "https://github.com/joanrig/vacation_bidder"
        },
      video: "https://www.loom.com/share/b46f1f2896d64e1d9f90be2968037326",
      demo: "",
      notes: "Add to your bucket list and then turn bucket list items into vacations.",
      blogPosts: [
        {
          title: "Nested Routes and Nested Forms",
          link: "https://medium.com/@joanrigdon/rails-portfolio-project-vacation-bidder-part-1-db9cf4590141"
        }
      ]
    }

    let hogIron = {
      id: 3,
      name: "Hog Iron",
      type: "group",
      contributors: ["Lizzie Chan", "Vinh Do", "Bryn Lastname"],
      github: {
          mono: "https://github.com/joanrig/Hog-Iron"
        },
      tools: [
        "Ruby on Rails",
        "Bootstrap"
      ],
      video: "",
      demo: "https://hog-iron.herokuapp.com/",
      notes: "I contributed logic for the sorting act and full-screen images/ Boostrap styling for most pages",
      blogPosts: ""
    }


    let spaceMissions = {
      id: 4,
      name: "Space Missions CLI",
      type: "solo",
      contributors: "",
      github: {
          mono: "https://github.com/joanrig/Hog-Iron"
        },
      tools: [
        "Ruby",
      ],
      video: "https://www.loom.com/share/4c54a64adebd4bf3afb0913da06649df",
      demo: "",
      notes: "Here's a fun way to sort through the Jet Propulsion Laboratory's space missions",
      blogPosts: [
        {
          title: "Creating my own Ruby Gem: a Tale of Fear and Git",
          link: "https://medium.com/me/stats/post/a0103dc6a6e7"
        },
        {
          title: "CLI Project Part Two: Scope and Flow",
          link: "https://medium.com/@joanrigdon/cli-gem-part-two-scope-and-flow-5a56b6190fa7"
        }
      ]
    }

    let projects = [congress, vacationBidder, hogIron, spaceMissions]
    debugger



    return (
      <Container className="center">
        <br/>
        <h1>
          Hello from Projects.js
        </h1>
        <br/>
        <br/>
        <br/>
        <Card.Group>

        {projects.map(project =>
          <ProjectCard
            key={project.id} project={project}/>
          )}
        </Card.Group>
      </Container>
    )
  }
}

export default Projects;
