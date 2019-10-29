import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'


class BlogCard extends Component  {


  render(){


    let post = this.props.post



    return (
      <>
        <Card>
          <Image src={post.image} className="card-image"/>

          <Card.Content>
            <Card.Header>
              <br/>
              <div className="large">{post.title}</div>
            </Card.Header>

          </Card.Content>

          <Card.Content extra className="cardBottom">

          </Card.Content>
        </Card>
      </>
    )



  }

}

export default BlogCard;
