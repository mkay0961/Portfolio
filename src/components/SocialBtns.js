import React from 'react'
import { Label, Popup, Icon, Button, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons';

const SocialBtns = (props) => (
  <div id="container">
    <Popup trigger={<SocialIcon url="https://www.linkedin.com/in/matthew-kay-b70104b8/" />} content="Linkedin"/>
    <Popup trigger={<SocialIcon url="https://github.com/mkay0961/" />} content="Github"/>
    <Popup trigger={<SocialIcon url="https://medium.com/@mkay0961" />} content="Personal Blog"/>
    <Popup trigger={<SocialIcon url="https://matthewpkay.wordpress.com/" />} content="Personal Blog"/>
    <Popup trigger={<SocialIcon url="https://www.facebook.com/matthew.kay.528" />} content="Facebook"/>
    <Popup trigger={<SocialIcon url="https://www.instagram.com/mkay0961/" />} content="Instagram"/>
  </div>
)

export default SocialBtns
