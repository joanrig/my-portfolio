import React, { Component } from 'react';
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react'


class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
      let url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joanrigdon`

      fetch(url)
          .then(response => response.json())
          .then(posts => this.setState({posts: posts}))
          console.log(this.state.posts)    
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
            {this.state.posts}
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
