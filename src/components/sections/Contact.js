import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Element } from "react-scroll"

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "mlogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id="contact" className="bg-light py-5">
        <Element name="contact" className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3>Get In Touch</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio, illo?
              </p>
              <form>
                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-pencil-alt" />
                    </span>
                  </div>
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary btn-block btn-lg"
                />
              </form>
            </div>
            <div className="col-lg-3 d-none d-lg-block align-self-center">
              <Img fluid={data.logo.childImageSharp.fluid} />
            </div>
          </div>
        </Element>
      </section>
    )}
  />
)

export default Contact
