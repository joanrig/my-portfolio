import React, { Component } from 'react';
import NavBar from '../NavBar'
import { Container, Card } from 'semantic-ui-react'
import BlogCard from './BlogCard'


class BlogContainer extends Component {

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
      .then(posts => this.setState({ posts: posts["items"]}))
  }

  render(){
    let posts = this.state.posts.filter(post => post.categories.length > 0)


    return(
      <div>
        <NavBar />
        <Container className="blog">
          <br/>
          <br/>
          <div className="big grey center">
              My Recent Blog Posts
          </div>
          <br/>
          <br/>
          <br/>
          <p>I'm a regular contributor to <a href="https://medium.com/javascript-in-plain-english">JavaScript in Plain English</a> and <a href="https://medium.com/swlh">The Startup</a> on Medium.com. You can <a href="https://medium.com/@joanrigdon">see all my posts here.</a></p>

          <p>If you're curious my first career, as a journalist, you can find <a href="http://www.joanrigdon.com/clips.html">my clips</a> here.</p>

          <br/>
          <br/>
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

export default BlogContainer
