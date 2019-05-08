import React, { Component } from 'react'
import { Label, Item, Segment, Container, Divider, Transition, Visibility } from 'semantic-ui-react'

class Job extends Component {
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
                    <Label size="big">{this.props.name}</Label>
                  </Item.Header>
                  <Divider/>
                  <Container textAlign='left'>
                    <Item.Meta>
                      <h4>{this.props.position}</h4>
                      <Divider/>
                    </Item.Meta>
                    <Item.Meta>
                      <Label size="tiny" color='teal' ribbon>{this.props.date}</Label>
                    </Item.Meta>
                    <br/>
                    <Item.Description>
                      {this.props.description.map((desc)=>{
                        return<p>
                          {desc}
                        </p>
                      })}
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

export default Job
