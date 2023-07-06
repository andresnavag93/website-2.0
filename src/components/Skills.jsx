import react from '../assets/img/skills/react.svg'
import javascript from '../assets/img/skills/javascript.svg'
import typescript from '../assets/img/skills/typescript.svg'
import nextjs from '../assets/img/skills/nextjs.svg'
import css from '../assets/img/skills/css.svg'
import html from '../assets/img/skills/html.svg'
import redux from '../assets/img/skills/redux.svg'
import tailwind from '../assets/img/skills/tailwind.svg'
import bootstrap from '../assets/img/skills/bootstrap.svg'

import python from '../assets/img/skills/python.svg'
import git from '../assets/img/skills/git.svg'
import nodejs from '../assets/img/skills/nodejs.svg'
import aws from '../assets/img/skills/aws.svg'
import unity from '../assets/img/skills/unity.svg'
import mongodb from '../assets/img/skills/mongodb.svg'
import mysql from '../assets/img/skills/mysql.svg'
import postgresql from '../assets/img/skills/postgresql.svg'
import postman from '../assets/img/skills/postman.svg'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                {/* I'm proficient in cutting-edge technologies like React,
                JavaScript, HTML, CSS, TypeScript, and Node. Throughout my
                career, I've had the opportunity to collaborate in many software
                projects, with a keen focus on optimization, testing, and clean
                code principles */}
              </p>
              <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" className="item-80-width" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Image" />
                  <h5>NextJs</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" className="item-80-width" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
              <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="owl-carousel owl-theme skill-slider mt-5"
              >
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image" className="item-80-width" />
                  <h5>Aws</h5>
                </div>
                <div className="item">
                  <img src={unity} alt="Image" />
                  <h5>Unity</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={postgresql} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="Image" />
                  <h5>Postman</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
