import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import Resume from '../resume.pdf'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>{siteTitle}</Navbar.Brand>
    <Nav>
      <Nav.Link href="/">Resume</Nav.Link>
      {/* <Nav.Link href="#">Blog</Nav.Link> */}
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href={Resume} target="_blank">
        Download PDF
      </Nav.Link>
    </Nav>
  </Navbar>
)

export default Header
