import React, { Component } from 'react'
import { Menu, Responsive, Segment, Header, Image, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const ProfilePicBox = (props) => (
    <div id="proPic">
      <Header textAlign='center'>
        <Header.Content>
          <Image centered src={require("../pictures/proPic.png")}/>
          <h1>Matthew Kay</h1>
          <p>
            Stuff about how awesome i am goes here
          </p>
        </Header.Content>
      </Header>
    </div>
)



export default ProfilePicBox
