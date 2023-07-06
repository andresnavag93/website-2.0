import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../logo.svg'
import 'animate.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [
    'Frontend Developer',
    'Software Engineer',
    'Computer Engineer',
  ]
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center opacity-1">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              {/* <span className="tagline">Welcome to my Portfolio</span> */}
              <h1>
                {`Hi! I'm Andres Navarro`}{' '}
                <span
                  className="txt-rotate"
                  data-rotate='[ "Frontend Developer", "Software Engineer", "Computer Engineer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Software Engineer with 6+ years of expertise. Proficient in
                cutting-edge technologies such as React, JavaScript, HTML, CSS,
                Typescript, and Node. Collaborated on multiple software
                projects, with experience in the entire software development
                life cycle, from conception to deployment, with a keen focus on
                optimization, testing, code maintainability, and clean code. If
                you need assistance in modern technologies or if you're
                interested in working together on an exciting project, feel free
                to reach out. I'd be delighted to help you out!
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
