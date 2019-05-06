import React from 'react'
import { Card, Item, Responsive, Popup, Segment, Header } from 'semantic-ui-react'
import ProjectMouse from '../components/ProjectMouse'
import ProjectMobile from '../components/ProjectMobile'

const Projects = [
  {name: "Food Tracker"},
  {name: "Uno!"},
  {name: "Squeek"},
  {name: "Hashing"},
  {name: "Alarm Clock"}
]

const ProjectContainer = (props) => (
  <div id="container">
    <Segment><Header as="h1">Projects</Header></Segment>
    <Responsive minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyTablet.minWidth} >
      <Card.Group>
        {Projects.map((pro, i)=> <ProjectMobile key={i} name={pro["name"]} />)}
      </Card.Group>
    </Responsive>
    <Responsive  minWidth={Responsive.onlyTablet.minWidth+1} >
      <Card.Group>
        {Projects.map((pro, i)=> <ProjectMouse key={i} name={pro["name"]} />)}
      </Card.Group>
    </Responsive>
  </div>
)

export default ProjectContainer
