import React from 'react'
import Email from '../components/Email'
import SocialBtns from '../components/SocialBtns'
import { Label, Header } from 'semantic-ui-react'

const ContactMePage = (props) => (
  <div id="backImage" className="contactPage">
    <Label size="massive" color="white"><Header as="h1">Matthew Kay</Header></Label>
     <Email/>
     <SocialBtns/>
  </div>
)

export default ContactMePage
