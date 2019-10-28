import React from 'react';
import { Container, Card  } from 'semantic-ui-react'
import ProjectCard from './ProjectCard.js'
import NavBar from '../NavBar'
import { projectsList } from './ProjectsList'


const Projects = () => {

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
            {projectsList.map(project =>
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


export default Projects;
