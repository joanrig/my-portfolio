import React, { Component } from 'react';
import CoverPic from './CoverPic'
import { Link, Redirect } from 'react-router-dom'



class Home extends Component {
  state = {
    visible: false,
    redirect: false

  }

  componentDidMount() {
    this.setState({ visible: true })
    this.fader = setTimeout(() => this.setState({ visible: false }), 3000)
    this.forward = setTimeout(() => this.setState({ redirect: true }), 4000)
  }

  componentWillUnmount() {
    clearTimeout(this.fader)
    clearTimeout(this.forward)
  }

  render() {


    if(this.state.redirect){
      return <Redirect to="./projects" />
    } else {
      return(
          <div className={this.state.visible?'fadeIn':'fadeOut'}>
          <Link to="./projects">
            <br/>
            <div >
              <h2 className="grey center">I'm Joan.   Let's build something fabulous together ...   </h2>

            </div>
            <br/>

            <Link to='/projects'><CoverPic /></Link>
            <br/>
          </Link>
          </div>
        )
    }

  }


}

export default Home;
