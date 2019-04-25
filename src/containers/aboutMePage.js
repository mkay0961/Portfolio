import React from 'react'
import ProfilePicBox from '../components/ProfilePicBox'
import InfoAboutMe from './InfoAboutMe'
import { Grid, Image, Responsive  } from 'semantic-ui-react'

const AboutMePage = (props) => (
  <div>

    <Responsive maxWidth={500}>
      <ProfilePicBox />
      <InfoAboutMe />
    </Responsive>

    <Responsive minWidth={501}>
      <Grid columns={2} padded>
        <Grid.Column>
          <ProfilePicBox />
        </Grid.Column>
        <Grid.Column>
          <InfoAboutMe />
        </Grid.Column>
      </Grid>
    </Responsive>

  </div>
)

export default AboutMePage
