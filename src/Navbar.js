import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.scss'

const Navbar2 = () => {
    return (
      <div>

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/search-weather">Weather</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
}


export default withRouter(Navbar2)