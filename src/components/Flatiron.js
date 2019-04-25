import React, {Component} from 'react'
import { Label, Item, Segment, Header, Container, Divider, Transition } from 'semantic-ui-react'

class Flatiron extends Component {
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
      <Transition visible={transition} animation='slide up' duration={500}>
  <Segment>
    <Item>
      <Item.Content>
        <Item.Header>
          The Flatiron School D.C.
        </Item.Header>
        <Divider/>
        <Container textAlign='left'>
          <Item.Meta>
            <Label as='a' color='teal' ribbon>Graduated: April 2019</Label>
          </Item.Meta>
          <br/>
          <Item.Description>
            Imersive Full Stack Web Development Program
          </Item.Description>
        </Container>
      </Item.Content>
    </Item>
  </Segment>
</Transition>
)
}
}

export default Flatiron
