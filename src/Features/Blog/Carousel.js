import React, { Component } from "react";
import Slider from "react-slick";
import BlogCard from './BlogCard'
import NavBar from '../NavBar'
import { Container } from 'semantic-ui-react'

class Carousel extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [],
      width: window.innerWidth
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleWindowSizeChange);
    let url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joanrigdon`

    fetch(url)
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts["items"]}))
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
    width <= 1100 ? isMobile = true : isMobile = false


    let slidesPerRow
    isMobile? slidesPerRow = 1 : slidesPerRow = 3

    let posts = this.state.posts.filter(post => post.categories.length > 0)


    var settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      slidesPerRow: slidesPerRow,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true

    }



    return (
      <>
        <NavBar />
        <Container className="blog">
          <br/>

          <div className="big grey center">
            My Recent Blog Posts
          </div>
          <br/>
          <br/>
          <br/>
          <p>I'm a regular contributor to <a href="https://medium.com/javascript-in-plain-english">JavaScript in Plain English</a> and <a href="https://medium.com/swlh">The Startup</a> on Medium.com. You can <a href="https://medium.com/@joanrigdon">see all my posts here.</a></p>

          <p>If you're curious about the stories I wrote when I was a journalist, you can find <a href="http://www.joanrigdon.com/clips.html">my clips</a> here.</p>

          <br/>
          <br/>
          <br/>
          <br/>

          <Slider {...settings} className="white" >
            {posts.map(post =>
            <div>
              <BlogCard
                key={post["id"]} {...post} />
            </div>
            )}

          </Slider>
        </Container>
      </>
    )
  }
}

export default Carousel
