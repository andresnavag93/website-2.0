import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo-2.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from '../assets/img/envelope.svg'
import navIcon4 from '../assets/img/console.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-start mb-4 mb-sm-0"
          >
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
