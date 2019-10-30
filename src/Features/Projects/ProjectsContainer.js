import React, { Component } from 'react';
import { Container, Card  } from 'semantic-ui-react'
import ProjectCard from './ProjectCard.js'
import NavBar from '../NavBar'
import { projectsList } from './ProjectsList'


class Projects extends Component {
  constructor(props) {
    super()

    this.state = {
        width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render(){
    let isMobile
    const width = this.state.width
    width <= 850 ? isMobile = true : isMobile = false


    let itemsPerRow
    isMobile? itemsPerRow = 1 : itemsPerRow = 2



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
          <Card.Group itemsPerRow={itemsPerRow}>
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
}


export default Projects;
