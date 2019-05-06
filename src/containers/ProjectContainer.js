import React from 'react'
import { Card, Item, Segment, Header, Container, Divider } from 'semantic-ui-react'
import Project from '../components/Project'

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
    <Card.Group>
    {Projects.map((pro, i)=> <Project key={i} name={pro["name"]} />)}
    </Card.Group>
  </div>
)

export default ProjectContainer
