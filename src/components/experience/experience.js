import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./experience.module.scss"
import PageHeading from "../../components/PageHeading"
import ContentPanel from "../ContentPanel"
import Orgs from "./orgs"

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

    const unformattedData = experienceData.frontmatter.description

    const formattedData = unformattedData.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``)

    return (
        <div>
            <PageHeading data={experienceData.frontmatter.title}/>
            <div className={styles.container}>
                <ContentPanel data={formattedData}/>
                <Orgs />
            </div>
        </div>
    )
}

export default Experience