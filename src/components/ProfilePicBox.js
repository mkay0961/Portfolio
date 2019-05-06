import React, { Component } from 'react'
import { Menu, Responsive, Segment, Header, Image, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const ProfilePicBox = (props) => (
    <div id="proPic">
      <Header textAlign='center'>
        <Header.Content>
          <Image centered circular src={require("../pictures/proPic.png")}/>
          <br/>
          <p>
            Problem solving has always been a strength and one of the reasons
            I became passionate about technology and Software Development. I
            received a Computer Science and Data Science degree from the College
            of Charleston where I strengthened my software development skills.
            Immediately following graduation I continued building my software
            development skills by enrolling in the Flatiron School where I
            completed a full stack immersive web development program.
            These institutions provided a strong foundation in software
            development and database management including proficiency in
            such as Python, Java, JavaScript, Ruby, HTML, CSS, Ruby on Rails,
            React, Redux and SQL.
        </p>
        </Header.Content>
      </Header>
    </div>
)



export default ProfilePicBox
