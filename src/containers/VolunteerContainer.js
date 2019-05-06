import React from 'react'
import { Label, Item, Segment, Header, Container, Divider } from 'semantic-ui-react'
import Volunteer from '../components/Volunteer'

const Volunteers = [
  {name: "Village at Rockville Retirement Community" , date: "Jan 2013 – May 2014"  , description: "Assisted residents with physical activities"},
  {name: "Hospice Caring Montgomery County" , date: "Aug 2010 – Oct 2012", description: "Assisted with annual fundraiser events"}
]
const VolunteerContainer = (props) => (
  <div id="container" >
    <Segment><Header as="h1">Volunteer History</Header></Segment>
    <Item.Group>
      {Volunteers.map((vol, i)=><Volunteer key={i} name={vol["name"]} date={vol["date"]} description={vol["description"]} />)}
    </Item.Group>
  </div>
)

export default VolunteerContainer
