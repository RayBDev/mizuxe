import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Authors = () => (
  <StaticQuery
    query={graphql`
      query {
        person1: file(relativePath: { eq: "person1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        person2: file(relativePath: { eq: "person2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        person3: file(relativePath: { eq: "person3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        person4: file(relativePath: { eq: "person4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="authors" className="my-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info-header mb-5">
                <h1 className="text-primary pb-3">Meet The Authors</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, placeat itaque soluta debitis quisquam fugiat!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <Img
                    fluid={data.person1.childImageSharp.fluid}
                    className="rounded-circle w-50 mb-3 mx-auto"
                  />
                  <h3>Susan Williams</h3>
                  <h5 className="text-muted">Lead Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore accusantium reiciendis vitae, aspernatur suscipit
                    adipisci!
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="https://facebook.com">
                        <i className="fab fa-facebook" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://twitter.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://instagram.com">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <Img
                    fluid={data.person2.childImageSharp.fluid}
                    className="rounded-circle w-50 mb-3 mx-auto"
                  />
                  <h3>Grace Smith</h3>
                  <h5 className="text-muted">Co-Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore accusantium reiciendis vitae, aspernatur suscipit
                    adipisci!
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="https://facebook.com">
                        <i className="fab fa-facebook" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://twitter.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://instagram.com">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-resp">
              <div className="card">
                <div className="card-body">
                  <Img
                    fluid={data.person3.childImageSharp.fluid}
                    className="rounded-circle w-50 mb-3 mx-auto"
                  />
                  <h3>John Doe</h3>
                  <h5 className="text-muted">Editor</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore accusantium reiciendis vitae, aspernatur suscipit
                    adipisci!
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="https://facebook.com">
                        <i className="fab fa-facebook" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://twitter.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://instagram.com">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-resp">
              <div className="card">
                <div className="card-body">
                  <Img
                    fluid={data.person4.childImageSharp.fluid}
                    className="rounded-circle w-50 mb-3 mx-auto"
                  />
                  <h3>Kevin Swanson</h3>
                  <h5 className="text-muted">Designer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore accusantium reiciendis vitae, aspernatur suscipit
                    adipisci!
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="p-4">
                      <a href="https://facebook.com">
                        <i className="fab fa-facebook" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://twitter.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="https://instagram.com">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default Authors
