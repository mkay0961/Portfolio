import React, { Component } from 'react'
import { Menu, Responsive, Segment, Header, Image, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class ProfilePicBox extends Component {
  constructor(){
    super()
    this.state = {
      transition: false
    }
  }

  componentDidMount(){
    this.setState({ transition: true })
  }

  render() {
    const { transition } = this.state

    return (
        <div id="proPic">
          <Header textAlign='center'>
            <Header.Content>
              <Image centered src={require("../pictures/proPic.png")}/>
              <h1>Matthew Kay</h1>
            </Header.Content>
          </Header>
        </div>
    )
  }
}

export default ProfilePicBox
