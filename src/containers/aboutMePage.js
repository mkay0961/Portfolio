import React from 'react'
import ProfilePicBox from '../components/ProfilePicBox'
import InfoAboutMe from './InfoAboutMe'
import SkillsContainer from './SkillsContainer'
import { Grid, Image, Responsive  } from 'semantic-ui-react'

const AboutMePage = (props) => (
  <div>

    <Responsive maxWidth={500}>
      <ProfilePicBox />
      <InfoAboutMe />
      <SkillsContainer />
    </Responsive>



  </div>
)

export default AboutMePage

// <Responsive minWidth={501}>
//   <Grid columns={2} padded>
//     <Grid.Column>
//       <Grid.Row>
//         <ProfilePicBox />
//       </Grid.Row>
//       <Grid.Row>
//         skills?
//       </Grid.Row>
//     </Grid.Column>
//     <Grid.Column>
//       <InfoAboutMe />
//     </Grid.Column>
//   </Grid>
// </Responsive>
