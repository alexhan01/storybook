import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./experience.module.scss"
import PageHeading from "../../components/PageHeading"

function Experience() {
    const data = useStaticQuery(graphql`
        query ExperienceQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "Experience"}}}) {
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
            <PageHeading data={experienceData.frontmatter.title}/>
            <p>{experienceData.frontmatter.title}</p>
            <p>{experienceData.frontmatter.description}</p>
        </div>
    )
}

export default Experience