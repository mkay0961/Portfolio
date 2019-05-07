import React, { Component } from 'react'
import { Label, Form, Icon, Segment, Header, Input, TextArea, Divider, Ref, Button } from 'semantic-ui-react'

class Email extends Component {
  constructor(){
    super()
    this.state = {
      name:"",
      phone:"",
      mess:""
    }
  }

  handleChange = (event) => {

    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })

  }

  handSubmit = (e) => {
    e.preventDefault()
    document.getElementById("email").href = `mailto:mkay0961@gmail.com?subject=${this.state.name} wants to connect!&body=Phone number: ${this.state.phone} %0D%0A%0D%0A Message: ${this.state.mess}`
    document.getElementById("email").click()

  }

  render() {

    return (
      <div id="container" className="contactStuff">
        <Label siz="massive"><Icon name='mail' size='large' />Mkay0961@gmail.com</Label>
        <Form onChange={this.handleChange}>
            <Form.Field name="name" control={Input} label='Name' placeholder='Name' />
            <Form.Field name="phone" control={Input} label='Phone number' placeholder='Phone number' />
            <Form.Field name="mess" control={TextArea} label='Message' placeholder='Message...' />
            <Form.Field onClick={this.handSubmit} control={Button}>Submit</Form.Field>
        </Form>
        <a href="mailto:nowhere@mozilla.org" id="email"></a>
      </div>
    )
  }
}

export default Email
