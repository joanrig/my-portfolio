import React, { Component } from 'react';
import FerrisPic from './FerrisPic'
import { Link, Redirect } from 'react-router-dom'



class Home extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {


    if(this.state.redirect){
      return <Redirect to="./projects" />
    } else {
      return(
        <Link to="./projects">
        <br/>
        <h2 className="grey center">I'm Joan. Let's build something fabulous together ...</h2>

        <Link to='/projects'><FerrisPic /></Link>
        <br/>
      </Link>
    )
    }

  }


}

export default Home;
