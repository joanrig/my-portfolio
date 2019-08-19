import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard.js'
import NavBar from '../components/NavBar'


class Projects extends Component {

  render(){

    let congress = {
      id: 1,
      name: "Who's Who in Congress",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vote-lead-01-1520883451.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      type: "solo",
      tools: [
        "Rails API",
        "PostgreSQL",
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
      demo: "https://congress-front-end.herokuapp.com",
      notes: "A guessing game. Search and sort Congress members by party, gender and fun traits like most missed votes! Then guess who's who and click to reveal the answer. You can also search for bills. Built with React, Redux and Semantic React UI on the front end; and a Rails API, ActiveModel and Postgres on the back end.",
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
      image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      type: "solo",
      tools: [
        "Ruby on Rails",
        "PostgreSQL",
        "Javascript",
        "Bootstrap",
        "OmniAuth",
        "Devise"
      ],
      github: {
          mono: "https://github.com/joanrig/vacation_bidder"
        },
      video: "https://www.loom.com/share/b46f1f2896d64e1d9f90be2968037326",
      demo: "",
      notes: "Add to your bucket list and then turn bucket list items into vacations. Add attractions and schedules to vacations. This is where I learned to secure logins, third-party login and conditional logic to render background pictures based on object attributes. Built with Rails, Javascript and Bootstrap on the front end; and Rails, ActiveModel and Postgres on the back end.",
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
      image: "http://www.superhero-therapy.com/wp-content/uploads/2019/06/Sorting-Hat-1.jpg",
      type: "group",
      contributors: ["Lizzie Chan", "Vinh Do", "Bryn Lastname"],
      github: {
          mono: "https://github.com/joanrig/Hog-Iron"
        },
      tools: [
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap"
      ],
      video: "",
      demo: "https://hog-iron.herokuapp.com/",
      notes: "A mock Harry Potter site where you can be sorted into a house and sign up for and drop classes. I contributed logic for the sorting hat and Boostrap styling for most pages. Built with Rails and Bootstrap on the front end and Rails, ActiveModel and Postgres on the back end.",
      blogPosts: ""
    }

    let spaceMissions = {
      id: 4,
      name: "Space Missions CLI",
      image: "https://www.jpl.nasa.gov/missions/web/cassini.jpg",
      type: "solo",
      contributors: "",
      github: {
          mono: "https://github.com/joanrig/space_missions2.0"
        },
      tools: [
        "Ruby", "Nokogiri"
      ],
      video: "https://www.loom.com/share/4c54a64adebd4bf3afb0913da06649df",
      demo: "",
      notes: "A command line interface program that allows you to sort NASA's Jet Propulsion Laboratory's space  missions by date and planet. Built with Ruby and now available for download as a Ruby Gem. Uses Nokogiri to scrape the JPL website.",
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

    return (
      <>
        <NavBar/>
        <Container className="center">
          <br/>
          <br/>
          <br/>

          <div className="massive grey">
            My Recent Projects
          </div>
          <br/>
          <br/>

          <br/>
          <br/>
          <Card.Group itemsPerRow={2}>
            {projects.map(project =>
              <ProjectCard
                key={project.id} project={project} padding="20px"/>
              )}
          </Card.Group>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Container>
      </>
    )
  }
}

export default Projects;
