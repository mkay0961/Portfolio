import React from 'react'
import { Card, Popup, Image, Reveal, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'

const Project = (props) => (

  <Card>
    {props.name}
    <Card.Content>
      <Reveal animated='fade'>
        <Reveal.Content visible>
          <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src='/images/avatar/large/ade.jpg' size='big' />
        </Reveal.Content>
      </Reveal>
    </Card.Content>
  </Card>

)

export default Project
// <Card.Content>
// // <Reveal animated='fade'>
// //   <Reveal.Content visible>
// //     <Image src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
// //   </Reveal.Content>
// //   <Reveal.Content hidden>
// //     <Image src='/images/avatar/large/ade.jpg' size='big' />
// //   </Reveal.Content>
// // </Reveal>
// </Card.Content>
