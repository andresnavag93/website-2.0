import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export const ProjectCard = ({ title, subtitle, features, imgUrl }) => {
  const { links } = features

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{subtitle}</span>
          <br />
          {links.map((link, index) => {
            return (
              <a href={link[1]} target="_blank">
                <Button key={index} variant="primary" className="m-1">
                  {link[0]}
                </Button>
              </a>
            )
          })}
        </div>
      </div>
    </Col>
  )
}
