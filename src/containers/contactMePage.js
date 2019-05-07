import React from 'react'
import Email from '../components/Email'
import SocialBtns from '../components/SocialBtns'
import { Label, Responsive, Grid, Segment, Header, Container, Divider, Transition, Ref, Visibility } from 'semantic-ui-react'

const ContactMePage = (props) => (
  <div id="backImage" className="contactPage">
      <Responsive minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyTablet.minWidth} >
        <Label size="massive" color="white"><Header as="h1">Matthew Kay</Header></Label>
        <Email/>
        <SocialBtns/>
      </Responsive>

      <Responsive  minWidth={Responsive.onlyTablet.minWidth+1} maxWidth={Responsive.onlyLargeScreen.minWidth}>
        <Label size="massive" color="white"><Header as="h1">Matthew Kay</Header></Label>
        <Grid columns={2} padded='horizontally' className="socialGrid">
          <Grid.Row>
            <Grid.Column>
              <Email/>
            </Grid.Column>
            <Grid.Column>
              <SocialBtns/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive  minWidth={Responsive.onlyLargeScreen.minWidth} >
        <Label size="massive" color="white"><Header as="h1">Matthew Kay</Header></Label>
        <Grid columns={2} padded='horizontally' className="socialGrid">
          <Grid.Row>
            <Grid.Column>
              <Email/>
            </Grid.Column>
            <Grid.Column>
              <SocialBtns/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
  </div>
)

export default ContactMePage
