import React, { Component } from 'react';
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react'


class Blog extends Component {


componentDidMount(){
    let posts = fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joanrigdon`)
      .then(response => response.json())
      .then(blogs =>  {
        console.log({blogs})
      });
    return posts
  }

  render(){

    return(
      <div>
        <NavBar />
        <Container className="blog">
          <br/>
          <br/>
          <h1 className="center massive" color="white">
            Hire Me!
            {posts}
          </h1>
          <br/>
          <br/>
        </Container>

      </div>

    )
  }
}

export default Blog




    //
    // let posts = fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joanrigdon`)
