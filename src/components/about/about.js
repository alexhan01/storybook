import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./about.module.scss"
import ReadMe from "./readMe"

function About() {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "About"}}}) {
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
    const aboutData = data.allMarkdownRemark.nodes[0]

    return (
        <div>
            <ReadMe data={aboutData.frontmatter.description}/>
        </div>
    )
}

export default About