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
      videoUrl = <h3><a href={project.video}>Video</a></h3>
    }

    let githubLink = ""
    if (project.github.mono){
        githubLink = <h3><a href={project.github.mono}>Github</a></h3>
    } else if (project.github.frontEnd && project.github.backEnd){
        githubLink =
        <>
          <h3><a href={project.github.frontEnd}>Github Front End</a> ---
          <a href={project.github.backEnd}>Github Back End</a></h3>
        </>
    }

    let demo = ""
    if (project.demo){
        demo = <h3><a href={project.demo}>Demo</a></h3>
    }








    return (
      <Card>
        <Image src={project.image} />

        <Card.Content >
          <Card.Header>
            <h2>{project.name}</h2>
          </Card.Header>

          <Card.Description>
            <h4>{project.type} project</h4>
            {project.contributors}
            <br/>
            <br/>
            <div className = "left">
              {project.notes}<br/>
            </div>
            {demo}
            {videoUrl}
            {githubLink}
            <h3>Blog Posts </h3>
            {blogPosts}
          </Card.Description>
        </Card.Content>

        <Card.Content extra className="cardBottom">
          {tools}
        </Card.Content>
      </Card>
    )



  }

}

export default ProjectCard;
