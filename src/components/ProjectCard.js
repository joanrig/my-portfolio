import React, { Component } from 'react';
import { Card, Image} from 'semantic-ui-react'



class ProjectCard extends Component  {

  render(){


    let project = this.props.project

    let blogPosts = ""
    if (project.blogPosts){
      blogPosts = project.blogPosts.map(post => (
          <div key={post.index}><a href={post.link}>{post.title}</a></div>
        ))
    }

    let tools = ""
    if (project.tools){
      tools = project.tools.map(tool => (
        <div key={tool.index}> {tool} </div>
      ))
    }



    let videoUrl = ""
    if (project.video){
      videoUrl = <a href={project.video}><i class="video icon big"></i></a>
    }

    let githubLink = ""
    if (project.github.mono){
        githubLink = <a href={project.github.mono}><i class="github icon big"></i></a>
    } else if (project.github.frontEnd && project.github.backEnd){
        githubLink =
        <>
          <a href={project.github.frontEnd}><i class="github icon big"></i></a>
          <a href={project.github.backEnd}><i class="github icon big"></i></a>
        </>
    }

    let demo = ""
    if (project.demo){
        demo = <a href={project.demo}><i class="desktop icon big"/></a>
    }


    return (
      <Card>
        <Image src={project.image} />

        <Card.Content >
          <Card.Header>
            <br/>
            <div className="large">{project.name}</div>
          </Card.Header>

          <Card.Description className="readable">
            <h3>{project.type} project</h3>
            <br/>
            <br/>

            <div className = "left">
              {project.notes}<br/>
            </div>

            <br/>
            <h3>Blog Posts </h3>
            {blogPosts}

          </Card.Description>
        </Card.Content>

        <Card.Content extra className="cardBottom">
        {demo}
        {videoUrl}
        {githubLink}
        </Card.Content>
      </Card>
    )



  }

}

export default ProjectCard;
