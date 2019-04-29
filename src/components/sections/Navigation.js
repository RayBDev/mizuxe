import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-scroll"

const Navigation = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "mlogo.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className="py-4"
      >
        <div className="container">
          <Navbar.Brand href="index.html">
            <Img
              alt="logo"
              className="align-middle mr-1"
              fixed={data.logo.childImageSharp.fixed}
            />
            <h3 className="d-inline align-middle display-5">{siteTitle}</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" as="ul">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="authors"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Meet The Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )}
  />
)

export default Navigation
