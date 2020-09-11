import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./skills.module.scss"

function Skills() {
    const data = useStaticQuery(graphql`
        query SkillsQuery {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "Skills"}}}) {
                nodes {
                    frontmatter {
                        title
                        languages
                        os
                        cloud
                        frameworks
                        data
                        principles
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    const skillsData = data.allMarkdownRemark.nodes[0]

    var languagesData = skillsData.frontmatter.languages
    // var languagesDataSplit = languagesData.split(",")

    var osData = skillsData.frontmatter.os
    var osDataSplit = osData.split(",")

    var cloudData = skillsData.frontmatter.cloud
    var cloudDataSplit = cloudData.split(",")

    var frameworksData = skillsData.frontmatter.frameworks
    var frameworksDataSplit = frameworksData.split(",")

    var dataData = skillsData.frontmatter.data
    var dataDataSplit = dataData.split(",")

    var principlesData = skillsData.frontmatter.principles
    var principlesDataSplit = principlesData.split(",")

    return (
        <div className={styles.main}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Skills