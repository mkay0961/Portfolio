import React from 'react'
import { Label, Item, Segment, Header, Container, Divider } from 'semantic-ui-react'
import CollegeOfCharleston from '../components/CollegeOfCharleston'
import Flatiron from '../components/Flatiron'

// const Education =  () => [
//   {name: "College of Charleston" , graduated: "December 2018", description: ""}
// ]

const InfoAboutMe = (props) => (
  <div id="infoAboutMe">
    <Segment><Header as="h1">Education</Header></Segment>
    <Item.Group>
      <Flatiron />
      <br/>
      <CollegeOfCharleston />

    </Item.Group>
  </div>
)

export default InfoAboutMe
