import React from 'react'
import { Label, Card, Segment, Header, Container, Divider } from 'semantic-ui-react'
import Skill from '../components/Skill'

const skills = ["Python", "Java", "JavaScript", "React", "Ruby", "Ruby on Rails", "Redux", "SQL", "HTML", "CSS"]

const SkillsContainer = (props) => (
  <div id="container">

    <Segment>
      <Header as="h1">
        Skills
      </Header>
    </Segment>

    <div className="ui cards">
      {skills.map((skill, i)=><Skill name={skill} key={i}/>)}
    </div>

  </div>
)

export default SkillsContainer
