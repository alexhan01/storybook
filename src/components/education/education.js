import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./education.module.scss"
import PageHeading from "../../components/PageHeading"
import ContentPanel from "../ContentPanel"
import CoursesPanel from "./courses/coursesPanel"

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

    const unformattedData = educationData.frontmatter.description

    const formattedData = unformattedData.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``)

    return (
        <div>
            <PageHeading data={educationData.frontmatter.title}/>
            <div className={styles.container}>
                <ContentPanel data={formattedData}/>
                <CoursesPanel />
            </div>
        </div>
    )
}

export default Education