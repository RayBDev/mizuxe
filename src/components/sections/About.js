import React from "react"

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const About = () => {
  return (
    <section id="about" className="py-5 text-center bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="info-header mb-5">
              <h1 className="text-primary pb-3">Why This Book?</h1>
              <p className="lead pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cumque nostrum dolorem libero sint illum.
              </p>
            </div>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  style={{ cursor: "pointer" }}
                  eventKey="0"
                >
                  <h5 className="mb-0">
                    <i className="fas fa-arrow-circle-down" />
                    <span className="ml-1">Get Inspired</span>
                  </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia unde quod aliquid vel perferendis blanditiis ipsa
                    dolore, sint, vero, a minima animi laboriosam natus
                    incidunt. Aut sed recusandae voluptates alias consectetur
                    suscipit minima saepe. Mollitia facere facilis quidem quas
                    aut maiores deserunt reprehenderit veniam enim, aperiam
                    culpa repudiandae aspernatur praesentium.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  style={{ cursor: "pointer" }}
                  eventKey="1"
                >
                  <h5 className="mb-0">
                    <i className="fas fa-arrow-circle-down" />
                    <span className="ml-1">Gain The Knowledge</span>
                  </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam molestias sequi harum eum magnam fugiat reprehenderit
                    cupiditate, a ullam, doloribus eaque maxime praesentium
                    voluptas. Dolorum aliquam illo culpa officia minima natus
                    corrupti quos recusandae quis ad quae qui totam beatae
                    facilis, at nobis voluptas nulla error provident, modi quod
                    veritatis.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  style={{ cursor: "pointer" }}
                  eventKey="3"
                >
                  <h5 className="mb-0">
                    <i className="fas fa-arrow-circle-down" />
                    <span className="ml-1">Open Your Mind</span>
                  </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae culpa veritatis quisquam, saepe ipsa magni maiores
                    esse optio dolores nemo, possimus nihil! Quo nobis iusto cum
                    animi sint consequuntur veniam ducimus voluptate odio, quam
                    in atque molestias tempora incidunt delectus excepturi ad
                    optio non fugit repellat rem ea vel? Non.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
