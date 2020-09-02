import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./education.module.scss"
import PageHeading from "../../components/PageHeading"
import ContentPanel from "../ContentPanel"

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
            <ContentPanel data={educationData.frontmatter.description}/>
        </div>
    )
}

export default Education