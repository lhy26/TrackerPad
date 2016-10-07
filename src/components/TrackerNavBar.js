import React from 'react';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import { Link  } from 'react-router'

export default class TrackerNavbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return(
      <div>
      <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#/trackerutilities">s3DSensors</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li><a href="#/trackerutilities">TrackerUtilities</a></li>
              <li><a href="#/facecheck">FaceCheck</a></li>
            </Nav>
          </Navbar.Collapse>
      </Navbar>{this.props.children}</div>
      )
  }
}
