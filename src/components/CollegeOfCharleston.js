import React, { Component, createRef } from 'react'
import { Label, Item, Segment, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'

class CollegeOfCharleston extends Component {
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

  contextRef = createRef()

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { transition, calculations } = this.state

    return (
        <Visibility offset={[10, 10]} updateOn='repaint' onUpdate={this.handleUpdate}>
          <Transition visible={calculations.onScreen || calculations.topVisible} animation='zoom' duration={500}>
            <Segment>
              <Item>
                <Item.Content>
                  <Item.Header>
                    College of Charleston
                  </Item.Header>
                  <Divider/>
                  <Container textAlign='left'>
                    <Item.Meta>
                      <Label as='a' size="tiny" color='teal' ribbon>Graduated: December 2018</Label>
                    </Item.Meta>
                    <br/>
                    <Item.Description>
                      Major: Bachlor of Science in Computer Science
                      <br/><br/>
                      Minor: Data Science
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

export default CollegeOfCharleston
