import React from 'react'
import { Card, Responsive, Segment, Header } from 'semantic-ui-react'
import ProjectMouse from '../components/ProjectMouse'
import ProjectMobile from '../components/ProjectMobile'

const Projects = [
  { name: "Food Tracker",
    description: "This app helps track and reduce food waste, in addition to finding recipes based on the food in your house",
    details: ["Developed an API to calculate food waste, recipes, and store users data.",
              "Developed a React front-end so the user can interact with the application and add, eat, and view all their data. ",
              "Implemented Redux for better state management and authentication "],
    links:[{Frontend:"https://github.com/mkay0961/food_tracker_frontend"},{Backend: "https://github.com/mkay0961/food_tracker_backend"}],
    demo: "https://www.youtube.com/embed/rKszL_VdBCA",
    pic: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },

  { name: "Uno!",
    description: "Simple version of uno in which one player plays against three computers",
    details: ["Developed an API to calculate food waste, recipes, and store users data.",
              "Developed a React front-end so the user can interact with the application and add, eat, and view all their data. ",
              "Implemented Redux for better state management and authentication "],
    links:[{Frontend:"https://github.com/mkay0961/mod4_uno_project_frontend"},{Backend: "https://github.com/mkay0961/mod4_uno_project_backend"}],
    demo: "https://www.youtube.com/embed/CyNjqprbSUM",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/UNO_Logo.svg/1200px-UNO_Logo.svg.png"
  },

  { name: "Squeek",
    description: "This app helps track your personal hygiene products and helps find new products based on specific body features",
    details: ["Developed an API to calculate food waste, recipes, and store users data.",
              "Developed a React front-end so the user can interact with the application and add, eat, and view all their data. ",
              "Implemented Redux for better state management and authentication "],
    links:[{Frontend:"https://github.com/mkay0961/Front-end-squeek"},{Backend: "https://github.com/mkay0961/squeek"}],
    demo: "https://www.youtube.com/embed/RuQ4b7IVHcM",
    pic: "https://images.pexels.com/photos/545014/pexels-photo-545014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },

  { name: "Hashing",
    details: ["Created implementations of open and closed hashing", "Tested, analyzed and compared load factors and search efficiencies for open and closed hashing"],
    links:[{Github:"https://github.com/mkay0961/Hashing"}],
    pic: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },

  { name: "Alarm Clock",
    details: ["Complete design and implementation of original version of a dual alarm AM/FM clock radio using Graphical User Interface "],
    links:[{Github:"https://github.com/mkay0961/Alarm-Clock"}],
    pic: "https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
]

const ProjectContainer = (props) => (
  <div id="container" >
    <Segment><Header as="h1">Projects</Header></Segment>
    <Responsive minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyTablet.minWidth} >
      <Card.Group className="block">
        {Projects.map((pro, i)=> <ProjectMobile pic={pro["pic"]} demo={pro["demo"]} links={pro["links"]} description={pro["description"]} details={pro["details"]} key={i} name={pro["name"]} />)}
      </Card.Group>
    </Responsive>
    <Responsive  minWidth={Responsive.onlyTablet.minWidth+1} >
      <Card.Group>
        {Projects.map((pro, i)=> <ProjectMouse pic={pro["pic"]} demo={pro["demo"]} key={i} links={pro["links"]} description={pro["description"]} details={pro["details"]} name={pro["name"]} />)}
      </Card.Group>
    </Responsive>
  </div>
)

export default ProjectContainer
