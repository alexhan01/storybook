import React from "react"

import styles from "./projects.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import ProjectModule from "./projectModule/projectModule"
import PageHeading from "../../components/PageHeading"

function Projects() {
    const data = useStaticQuery(graphql`
    query projectsQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
            nodes {
                frontmatter {
                    title
                    github
                    description
                    tags
                }
                fields {
                    slug
                }
            }
        }
    }
    `)

    const projects = data.allMarkdownRemark.nodes

    return (
        <>
        <div>
            <PageHeading data="Projects"/>
        </div>
        <div>
            {projects.map((project) => (
                <ProjectModule project = {project.frontmatter} />
            ))}
        </div>
        </>
    )
}

export default Projects