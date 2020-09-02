import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./education.module.scss"
import PageHeading from "../../components/PageHeading"

function Education() {
    const data = useStaticQuery(graphql`
        query EducationQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "Education"}}}) {
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
    const educationData = data.allMarkdownRemark.nodes[0]

    return (
        <div>
            <PageHeading data={educationData.frontmatter.title}/>
            <p>{educationData.frontmatter.description}</p>
        </div>
    )
}

export default Education