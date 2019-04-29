import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Element } from "react-scroll"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        bookCover: file(relativePath: { eq: "book.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background: file(relativePath: { eq: "mountains.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header id="showcase" className="py-5">
        <Img
          fluid={data.background.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Element name="showcase" className="primary-overlay text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center">
                <h1 className="display-2 mt-5 pt-5">Do What You Dream Of...</h1>
                <p className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi, autem.
                </p>
                <a
                  href="/"
                  className="btn btn-outline-secondary btn-lg text-white"
                >
                  <i className="fas fa-arrow-right" />
                  Read More
                </a>
              </div>
              <div className="col-lg-6">
                <Img
                  alt="book cover"
                  fluid={data.bookCover.childImageSharp.fluid}
                  className="d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </Element>
      </header>
    )}
  />
)

export default Header
