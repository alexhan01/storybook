import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import styles from "./about.module.scss"
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

    const unformattedData = aboutData.frontmatter.description

    const formattedData = unformattedData.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``)

    return (
        <div>
            <ReadMe data={formattedData}/>
        </div>
    )
}

export default About