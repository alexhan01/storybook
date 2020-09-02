import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./experience.module.scss"

function Experience() {
    const data = useStaticQuery(graphql`
        query ExperienceQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "experience"}}}) {
                nodes {
                    frontmatter {
                        title
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)
    const experienceData = data.allMarkdownRemark.nodes[0]

    return (
        <div>
            <p>{experienceData.frontmatter.title}</p>
            <p>{experienceData.frontmatter.description}</p>
            {/* <span dangerouslySetInnerHTML={{ __html: description }} /> */}
        </div>
    )
}

export default Experience