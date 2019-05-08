import React, { Component } from 'react'
import { Menu, Responsive, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: "About Me"
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  openResume = () => {
    window.open('https://drive.google.com/file/d/153Q0ccFD95T1uDcHgKyVb7wp0M6K_Ap2/view','_self')
  }

  render() {
    const { activeItem } = this.state

    return (
        <Menu pointing inverted>

          <Link to="/AboutMe">
            <Menu.Item
              name='About'
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/Portfolio">
            <Menu.Item
              name='Portfolio'
              active={activeItem === 'Portfolio'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/ContactMe">
            <Menu.Item
              name='Contact'
              active={activeItem === 'Contact'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Menu.Item
            name='Resume'
            active={false}
            onClick={()=>this.openResume()}
          />


        </Menu>
    )
  }
}

export default Navbar

//
// <Responsive minWidth={501}>
//   <Menu.Item header>Matthew Kay</Menu.Item>
// </Responsive>
//
// <Responsive maxWidth={500}>
//     <Menu.Item color="red"header>M.K.</Menu.Item>
// </Responsive>
