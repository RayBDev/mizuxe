import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/sections/Header"
import Newsletter from "../components/sections/Newsletter"
import Benefits from "../components/sections/Benefits"
import About from "../components/sections/About"
import Authors from "../components/sections/Authors"
import Contact from "../components/sections/Contact"

import "../assets/scss/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main>
      <Newsletter />
      <Benefits />
      <About />
      <Authors />
      <Contact />
    </main>
  </Layout>
)

export default IndexPage
