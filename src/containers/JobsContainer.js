import React from 'react'
import { Item, Segment, Header } from 'semantic-ui-react'
import Job from '../components/Job'

const Jobs = [
  {name: "BodyTech Weight Loss and Health" ,
    position:"Admin Support", date: "August 2013 - Present",
    description: ["Assisted the CEO, data entry, order processing"
                  ,"Monitored inventory, greeted clients and managed databases"
                  ]
  },
  {name: "HackerX" ,
    position:"Event Coordinator", date: "October 2016",
    description: ["Coordinated a full-stack developer event and connected for over 100 developers with companies"
                  ,"Managed communications with local businesses standardized event process and schedule"
                ]
  },
  {name: "Camp Monroe" ,
    position:"Counselor / Snack Bar Manager", date: "Summer 2013, 2014, 2015, 2016",
    description: ["Coordinated and supervised activities for kids at sleep-away camp"
                  ,"Managed snack bar including inventory, ordering and collecting payments"
                ]
  },
  {name: "Unipark Valet & Parking Services" ,
    position:"Valet", date: "August 2014 - December 2014",
    description: ["Specialty parking at major sporting events and arenas, country clubs, restaurants, and private residences"]
  }
]

const JobsContainer = (props) => (
  <div id="container">
    <Segment><Header as="h1">Employment History</Header></Segment>
    <Item.Group>
      {Jobs.map((job, i)=><Job key={i} name={job["name"]} position={job["position"]} date={job["date"]} description={job["description"]} />)}
    </Item.Group>
  </div>
)

export default JobsContainer
