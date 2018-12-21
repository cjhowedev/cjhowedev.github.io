import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import Resume from '../resume.pdf'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>{siteTitle}</Navbar.Brand>
    <Navbar.Text>Software Engineer</Navbar.Text>
    <Nav className="ml-auto">
      <Nav.Link href="https://github.com/cjhowe7" target="_blank">
        GitHub
      </Nav.Link>
      <Nav.Link href="https://twitter.com/cjhowe7" target="_blank">
        Twitter
      </Nav.Link>
      <Nav.Link href={Resume} target="_blank">
        Download PDF
      </Nav.Link>
    </Nav>
  </Navbar>
)

export default Header
