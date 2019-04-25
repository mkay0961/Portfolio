import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Label, Card, Item, Segment, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'

class Skill extends Component {
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
      <div id="skill">
        <Visibility  offset={[10, 10]} updateOn='repaint' onUpdate={this.handleUpdate}>
          <Transition visible={transition} animation='tada' duration={700}>
            <div>
              {this.props.name}
            </div>
          </Transition>
        </Visibility>
      </div>
    )
  }
}


export default Skill
