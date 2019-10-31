import React, { Component } from 'react';
import FerrisPic from './FerrisPic'
import { Link, Redirect } from 'react-router-dom'



class Home extends Component {
  state = {
    visible: false,
    redirect: false

  }

  componentDidMount() {
    this.setState({ visible: true })
    this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
  }

  componentWillUnmount() {
    this.setState({ visible: false })
    clearTimeout(this.id)
  }

  render() {


    if(this.state.redirect){
      return <Redirect to="./projects" />
    } else {
      return(
          <div >
          <Link to="./projects">
            <br/>
            <div className={this.state.visible?'fadeIn':'fadeOut'} >
              <h2 className="grey center">I'm Joan. Let's build something fabulous together ...</h2>
            </div>
            <br/>

            <Link to='/projects'><FerrisPic /></Link>
            <br/>
          </Link>
          </div>
    )
    }

  }


}

export default Home;
