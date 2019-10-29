import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import ReactHtmlParser from 'react-html-parser';


class BlogCard extends Component  {

  handleClick = () => {

  }

  render(){

    let months = {
      1: "Jan.",
      2: "Feb.",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "Aug.",
      9: "Sept.",
      10: "Oct.",
      11: "Nov.",
      12: "Dec."
    }

    let date = this.props.pubDate.split(' ')[0].split('-')
    // ["2019", "10", "02"]

    let monthNum = parseInt(date[1])
    let month = months[monthNum]
    let day = parseInt(date[2])
    let year = parseInt(date[0])

    let pubDate = month + ' ' + day +', ' + year

    console.log(this.props)
    let content = `<p>${this.props.content.split('snippet">')[1].split('</div>')}`





    return (
      <>
        <Card onClick={this.handleClick}>

          <Image className="blogcard" src={this.props.thumbnail} />
          <Card.Content>
            <Card.Header>
              <a href={this.props.link}>{this.props.title}</a>
            </Card.Header>

          </Card.Content>

          <Card.Content extra className="cardBottom">
            { ReactHtmlParser(content)}
            <h6>published {pubDate}</h6>
            <br/>

          </Card.Content>
        </Card>
      </>
    )



  }

}

export default BlogCard;

//          <Image src={post.image} className="card-image"/>
