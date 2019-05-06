import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Card, Modal, Segment, Image, Button, Divider, Icon, Header, Popup, Label, Transition, Visibility } from 'semantic-ui-react'

class ProjectMobile extends Component {
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
    this.setState({show: true})
  }
  onClose = () =>{
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
      <Visibility  offset={[10, 10]} updateOn='repaint' onUpdate={this.handleUpdate}>
        <Transition visible={transition} animation='zoom' duration={500}>
          <Card onClick={()=>this.onOpen()} onHover={()=>this.onOpen()}>
            <Label size="massize">{this.props.name}</Label>
            <Card.Content >
              <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
              <Modal size="large" open={this.state.show} onClose={()=>this.onClose()}>
              <Modal.Header>{this.props.name}</Modal.Header>
              <Modal.Content image>
              <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Modal.Description>
                <Header>Modal Header</Header>
                <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='right chevron' />
              </Button>
            </Modal.Actions>
          </Modal>
          </Card.Content >
       </Card>
     </Transition>
    </Visibility>
    )
  }
}


export default ProjectMobile



// <Card.Content >
//   <Reveal animated='fade'>
//     <Reveal.Content visible>
//       <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
//     </Reveal.Content>
//     <Reveal.Content hidden>
//       <Image src='/images/avatar/large/ade.jpg' size='big' />
//     </Reveal.Content>
//   </Reveal>
// </Card.Content>


// import React from 'react'
// import { Card, Popup, Image, Reveal, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'
//
//
//
//
// const ProjectMobile = (props) => (
//
//   <Card>
//     {props.name}
//     <Card.Content>
//       <Reveal animated='fade'>
//         <Reveal.Content visible>
//           <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
//         </Reveal.Content>
//         <Reveal.Content hidden>
//           <Image src='/images/avatar/large/ade.jpg' size='big' />
//         </Reveal.Content>
//       </Reveal>
//     </Card.Content>
//   </Card>
//
// )
//
// export default ProjectMobile
// // <Card.Content>
// // // <Reveal animated='fade'>
// // //   <Reveal.Content visible>
// // //     <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
// // //   </Reveal.Content>
// // //   <Reveal.Content hidden>
// // //     <Image src='/images/avatar/large/ade.jpg' size='big' />
// // //   </Reveal.Content>
// // // </Reveal>
// // </Card.Content>
