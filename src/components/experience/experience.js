import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./experience.module.scss"

function Experience() {
    const data = useStaticQuery(graphql`
        query ExperienceQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "experience"}}}) {
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

export default Experience