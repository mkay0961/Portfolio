import React from 'react'
import { Item, Segment, Header } from 'semantic-ui-react'
import Education from '../components/Education'

const Educations = [
  {name: "Flatiron School" , graduated: "April 2019", description: "Full Stack Web Development, Ruby, Ruby on Rails, JavaScript and React / Redux"},
  {name: "College of Charleston" , graduated: "December 2018", description: "Major in Bachelor of Science Computer Science and a minor in Data Science"}
]

const InfoAboutMe = (props) => (
  <div id="container">
    <Segment><Header as="h1">Education</Header></Segment>
    <Item.Group>
      {Educations.map((edu, i)=><Education key={i} name={edu["name"]} gradDate={edu["graduated"]} description={edu["description"]} />)}
    </Item.Group>
  </div>
)

export default InfoAboutMe
