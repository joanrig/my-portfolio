import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container } from 'semantic-ui-react'


class Blog extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    console.log(this.state)
  }

  componentDidMount(){
    let url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joanrigdon`

    fetch(url)
      .then(response => response.json())
      .then(posts => console.log(posts))
  }




  render(){

    return(
      <div>
        <NavBar />
        <Container className="blog">
          <br/>
          <br/>
          <h1 className="center massive" color="white">
            {this.state.posts[0]}
          </h1>
          <br/>
          <br/>
        </Container>

      </div>

    )
  }
}

export default Blog
