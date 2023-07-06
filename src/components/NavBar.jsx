import { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap'
import logo from '../assets/img/logo-2.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from '../assets/img/envelope.svg'
import navIcon4 from '../assets/img/console.svg'
import { BrowserRouter as Router } from 'react-router-dom'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Router>
      <Navbar
        key="md"
        expand="md"
        className={scrolled ? 'scrolled p-3' : 'p-3'}
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Offcanvas id="basic-navbar-nav" placement="end">
            <Offcanvas.Header closeButton className="custom-white">
              <Offcanvas.Title id="basic-navbar-nav"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body aria-controls="basic-navbar-nav">
              <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                  }
                  onClick={() => onUpdateActiveLink('home')}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === 'skills'
                      ? 'active navbar-link'
                      : 'navbar-link'
                  }
                  onClick={() => onUpdateActiveLink('skills')}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === 'projects'
                      ? 'active navbar-link'
                      : 'navbar-link'
                  }
                  onClick={() => onUpdateActiveLink('projects')}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon ">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/andresnavag93">
                      <img src={navIcon1} alt="Icon" />
                    </a>
                    <a href="https://github.com/andresnavag93" target="_blank">
                      <img src={navIcon2} alt="Icon" />
                    </a>
                    <a href="mailto: andresnavag93gmail.com" target="_blank">
                      <img src={navIcon3} alt="Icon" />
                    </a>
                    <a href="https://andresnavag93.itch.io/" target="_blank">
                      <img src={navIcon4} alt="Icon" />
                    </a>
                  </div>
                </div>
              </span>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Router>
  )
}
