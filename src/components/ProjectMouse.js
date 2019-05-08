import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Card, Modal, Segment, Image, Button, Divider, Icon, Header, Popup, Label, Transition, Visibility } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons';


class ProjectMouse extends Component {
  constructor(){
    super()
    this.state = {
      show: false,
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

  onOpen = () =>{
    console.log("open");
    this.setState({show: true})
  }

  onClose = () =>{
    console.log("CLOSE ME");
    this.setState({show: false})
  }

  handleUpdate = (e, { calculations }) => {
    if(calculations.onScreen && !this.state.transition){
      this.setState({ transition: true, calculations })
    }
  }


  render() {
    const { transition } = this.state

    return (
      <Popup content={`Click me to find out more about ${this.props.name}!`} trigger={
      <div id="project">
        <Visibility  offset={[10, 10]} updateOn='repaint' onUpdate={this.handleUpdate}>
          <Transition visible={transition} animation='zoom' duration={500}>
            <Card onClick={()=>this.onOpen()} >
              <Label size="massize">{this.props.name}</Label>
              <Card.Content >
                {this.props.pic?
                  <Image src={`${this.props.pic}`}  />
                :
                  <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
                }
              </Card.Content >
            </Card>
          </Transition>
      </Visibility>

      <Modal size="fullscreen" open={this.state.show} onClose={()=>this.onClose()} >
        <Modal.Header>{this.props.name}</Modal.Header>
        <Modal.Content image >
          <Modal.Description >
          {this.props.demo?
          <iframe width="70%" height="500" src={`${this.props.demo}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          :null
          }
          <Divider/>
            {this.props.description? <Header>{this.props.description}</Header>: null}
            <Divider/>
              {this.props.details.map((det)=>{
                return<p>
                  {det}
                </p>
              })}
              <Divider/>
              {this.props.links.map((link)=>{
                return <a href={`${Object.values(link)[0]}`}><Label><SocialIcon url={`${Object.values(link)[0]}`} /><br/>{Object.keys(link)[0]}</Label></a>
              })}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={()=>this.onClose()} >
           Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  } />
    )
  }
}


export default ProjectMouse
