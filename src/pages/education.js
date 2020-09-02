import React from "react"

import Layout from "../components/layout"
import Education from "../components/education/education"
import SEO from "../components/seo"

const EducationPage = () => (
    <Layout>
        <SEO title="Education" />
        <Education />
    </Layout>
)

export default EducationPage