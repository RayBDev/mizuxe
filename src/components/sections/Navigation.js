import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-scroll"

import logo from "../../assets/images/mlogo.png"

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
      <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div className="container">
          <a href="/" className="navbar-brand">
            {/*<img src={logo} width="50" height="50" alt="logo" />*/}
            <Img
              alt="logo"
              className="align-middle mr-1"
              fixed={data.logo.childImageSharp.fixed}
            />
            <h3 className="d-inline align-middle display-5">{siteTitle}</h3>
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav ml-auto">
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
            </ul>
          </Navbar.Collapse>
        </div>
      </nav>
    )}
  />
)

export default Navigation
