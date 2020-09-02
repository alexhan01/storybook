import React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects/projects"
import SEO from "../components/seo"

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <Projects />
    </Layout>
)

export default ProjectsPage