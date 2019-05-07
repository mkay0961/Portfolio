import React from 'react'
import { Grid, Image, Segment, Label, Responsive, Divider, Header } from 'semantic-ui-react'
import ProjectContainer from './ProjectContainer'

const PortfolioPage = (props) => (
  <div id="backImage">
      <Responsive minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyTablet.minWidth} >
        <Label size="massive" color="white"><Header as="h1">Matthew Kay</Header></Label>
        <Segment id="clickMe">Click on a project to find out more!</Segment>
        <ProjectContainer />

      </Responsive>

      <Responsive  minWidth={Responsive.onlyTablet.minWidth+1} maxWidth={Responsive.onlyLargeScreen.minWidth}>
        <Label size="massive"><Header as="h1">Matthew Kay</Header></Label>
        <ProjectContainer />

      </Responsive>

      <Responsive  minWidth={Responsive.onlyLargeScreen.minWidth} >
        <Label size="massive"><Header as="h1">Matthew Kay</Header></Label>
        <ProjectContainer />

      </Responsive>

  </div>
)

export default PortfolioPage
