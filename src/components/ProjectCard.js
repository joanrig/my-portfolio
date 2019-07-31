import React, { Component } from 'react';
import { Card, Image} from 'semantic-ui-react'



class ProjectCard extends Component  {

  render(){
    return (
      <Card>
        <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vote-lead-01-1520883451.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" />

        <Card.Content >
          <Card.Header>

          </Card.Header>

          <Card.Description>

          </Card.Description>
        </Card.Content>

        <Card.Content extra >
          <div>

          </div>
        </Card.Content>
      </Card>
    )



  }

}

export default ProjectCard;
