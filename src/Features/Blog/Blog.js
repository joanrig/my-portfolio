import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container, Card } from 'semantic-ui-react'
import BlogCard from './BlogCard'


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
      .then(posts => this.setState({ posts: posts["items"]}))
  }





  render(){
    let posts = this.state.posts.filter(post => post.categories.length > 0)

    console.log(posts)

    return(
      <div>
        <NavBar />
        <Container className="blog">
          <br/>
          <br/>
          <Card.Group itemsPerRow={2}>
            {posts.map(post =>
              <BlogCard
                key={post["id"]} {...post} />
              )}
          </Card.Group>

          <br/>
          <br/>
        </Container>

      </div>

    )
  }
}

export default Blog
