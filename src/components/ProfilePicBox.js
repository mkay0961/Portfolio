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
            My passion for problem solving is one of the reasons I became interested
            in technology and software development.  I received a Computer Science
            and Data Science degree from the College of Charleston and immediately
            enrolled in the Flatiron School where I completed a full stack immersive
            web development program.
          </p>
          <br/>
          <p>
            These programs helped strengthened my skills and provided a strong
            foundation in software development and database management. I am proficient
            Python, Java, JavaScript, Ruby, HTML, CSS, Ruby on Rails, React, Redux and SQL.
          </p>
        </Header.Content>
      </Header>
    </div>
)



export default ProfilePicBox
