import React from "react"

import Layout from "../components/layout"
import About from "../components/about/about"
import Profile from "../components/about/profile"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    {/* <Profile /> */}
  </Layout>
)

export default IndexPage
