import React from 'react'
import ProfilePicBox from '../components/ProfilePicBox'
import InfoAboutMe from './InfoAboutMe'
import SkillsContainer from './SkillsContainer'
import JobsContainer from './JobsContainer'
import VolunteerContainer from './VolunteerContainer'
import { Grid, Image, Label, Responsive, Divider, Header } from 'semantic-ui-react'

const AboutMePage = (props) => (
  <div id="aboutme">

    <Responsive maxWidth={500}>
      <Label size="massive" color="white"><Header as="h1">Matthew Kay</Header></Label>
      <ProfilePicBox />
      <Divider inverted />
      <InfoAboutMe />
      <Divider inverted />
      <SkillsContainer />
      <Divider inverted />
      <JobsContainer />
      <Divider inverted />
      <VolunteerContainer />
    </Responsive>

    <Responsive minWidth={501}>
      <Label size="massive"><Header as="h1">Matthew Kay</Header></Label>

      <Grid columns={2} padded>
        <Grid.Column>

          <ProfilePicBox />

        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <InfoAboutMe />
          </Grid.Row>
          <Grid.Row>
            <SkillsContainer />
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <JobsContainer />
      <VolunteerContainer />
    </Responsive>

  </div>
)

export default AboutMePage
