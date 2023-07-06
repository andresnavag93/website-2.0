import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import { dataFullStack } from '../data/dataFullStack'
import { dataVideoGames } from '../data/dataVideoGames'
import { dataModels } from '../data/dataModels3d'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'

export const Projects = () => {
  const fullStackProjects = Object.values(dataFullStack)
  const videoGamesProjects = Object.values(dataVideoGames)
  const modelsProjects = Object.values(dataModels)

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2 className="mb-5">Projects</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p> */}
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Games</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Models</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className="animate__animated animate__slideInUp"
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {fullStackProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {videoGamesProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {modelsProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
