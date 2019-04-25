import React, { Component, createRef } from 'react'
import { Label, Item, Segment, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'

class Flatiron extends Component {
  constructor(){
    super()
    this.state = {
      transition: false,
      calculations: {
        direction: 'none',
        height: 0,
        width: 0,
        topPassed: false,
        bottomPassed: false,
        pixelsPassed: 0,
        percentagePassed: 0,
        topVisible: false,
        bottomVisible: false,
        fits: false,
        passing: false,
        onScreen: false,
        offScreen: false
      }
    }
  }

  // contextRef = createRef()

  handleUpdate = (e, { calculations }) => {
    if(calculations.onScreen && !this.state.transition){
      this.setState({ transition: true, calculations })
    }
  }

  render() {
    const { transition } = this.state

    return (

        <Visibility  offset={[10, 10]} updateOn='repaint' onUpdate={this.handleUpdate}>
          <Transition visible={transition} animation='zoom' duration={500}>
            <Segment>
              <Item>
                <Item.Content>
                  <Item.Header>
                    The Flatiron School D.C.
                  </Item.Header>
                  <Divider/>
                  <Container textAlign='left'>
                    <Item.Meta>
                      <Label as='a' size="tiny" color='teal' ribbon>Graduated: April 2019</Label>
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
        </Visibility>

    )
  }
}

export default Flatiron
