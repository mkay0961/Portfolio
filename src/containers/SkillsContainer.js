import React from 'react'
import { Label, Card, Segment, Header, Container, Divider } from 'semantic-ui-react'
import CollegeOfCharleston from '../components/CollegeOfCharleston'
import Flatiron from '../components/Flatiron'
import Skill from '../components/Skill'

const skills =  () => ["Pythin", "Java","Ruby", "Ruby on Rails", "JavaScript", "React" , "ADD MORE"]

const SkillsContainer = (props) => (
  <div id="skillsContainer">

    <Segment>
      <Header as="h1">
        Skills
      </Header>
    </Segment>

    <div className="ui cards">
      {skills().map((skill, i)=><Skill name={skill} key={i}/>)}
    </div>

  </div>
)

export default SkillsContainer
