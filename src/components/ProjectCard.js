import React, { Component } from 'react';
import { Card, Image} from 'semantic-ui-react'



class ProjectCard extends Component  {

  render(){
    debugger
    return (
      <Card>
        <Image src={this.props.project.image} />

        <Card.Content >
          <Card.Header>
            <h2>{this.props.project.name}</h2>
          </Card.Header>

          <Card.Description>
            Project type: solo / group etc. <br/>
            Notes go here <br/>
            Blogposts here <br/>
            embedded video?
          </Card.Description>
        </Card.Content>

        <Card.Content extra >
          <div>
          Tools list
          icons for ruby, javascript, etc.

          </div>
        </Card.Content>
      </Card>
    )



  }

}

export default ProjectCard;
