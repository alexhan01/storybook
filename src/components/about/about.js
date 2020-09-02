import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./about.module.scss"

function About() {
    const data = useStaticQuery(graphql`
        query ExperienceQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "education"}}}) {
                nodes {
                    html
                }
            }
        }
    `)
    const description = data.allMarkdownRemark.nodes[0].html
    return (
        <div>
            <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

export default About