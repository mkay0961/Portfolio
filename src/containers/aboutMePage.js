import React from 'react'
import ProfilePicBox from '../components/ProfilePicBox'
import InfoAboutMe from './InfoAboutMe'
import SkillsContainer from './SkillsContainer'
import JobsContainer from './JobsContainer'
import VolunteerContainer from './VolunteerContainer'
import { Grid, Image, Segment, Label, Responsive, Divider, Header } from 'semantic-ui-react'

const test = () => {
  console.log("mobile", {...Responsive.onlyMobile});
  console.log("tab", {...Responsive.onlyTablet});
  console.log("comp", {...Responsive.onlyComputer});
  console.log("large", {...Responsive.onlyLargeScreen});
  console.log("wide", {...Responsive.onlyWidescreen});

}


const AboutMePage = (props) => (
  <div id="backImage">

    <Responsive minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyTablet.minWidth} >

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

    <Responsive  minWidth={Responsive.onlyTablet.minWidth+1} maxWidth={Responsive.onlyLargeScreen.minWidth}>
      <Label size="massive"><Header as="h1">Matthew Kay</Header></Label>

      <Grid columns={2} padded>
        <Grid.Row>

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

        </Grid.Row>

        <Grid.Row>
          <Grid.Column id="widen">
            <JobsContainer />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column id="widen">
            <VolunteerContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </Responsive>

    <Responsive  minWidth={Responsive.onlyLargeScreen.minWidth} >
      <Label size="massive"><Header as="h1">Matthew Kay</Header></Label>

      <Grid columns={2} padded>
        <Grid.Row>

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
      </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <JobsContainer />
          </Grid.Column>
          <Grid.Column>
            <VolunteerContainer />
          </Grid.Column>
        </Grid.Row>


      </Grid>


    </Responsive>


  </div>
)

export default AboutMePage


    // <Responsive minWidth={1080}>
    //   <Segment>d</Segment>
    // </Responsive>
