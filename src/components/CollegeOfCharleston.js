import React from 'react'
import { Label, Item, Segment, Header, Container, Divider } from 'semantic-ui-react'

const CollegeOfCharleston = (props) => (
    <Item>
      <Item.Content>
        <Item.Header>
          College of Charleston
        </Item.Header>
        <Divider/>
        <Container textAlign='left'>
          <Item.Meta>
            Graduated: December 2018
          </Item.Meta>

          <Item.Description>
            Major: Bachlor of Science in Computer Science
            <br/><br/>
            Minor: Data Science
          </Item.Description>
        </Container>
        <Divider/>
      </Item.Content>
    </Item>
)

export default CollegeOfCharleston
