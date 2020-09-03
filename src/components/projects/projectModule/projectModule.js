import React from "react"
import styles from "./projectModule.module.scss"

// Todo: use github logo instead of link! 
// find a way to separate the tags

function ProjectModule(props) {
    return (
        <>
        <div className={styles.projectCard}>
            <button className={styles.accordion}>{props.project.title}</button>
            <div className={styles.panel}>
                <p>{props.project.github}</p>
                <p>{props.project.description}</p>
                <p>{props.project.tags}</p>
            </div>
        </div>
        </>
    )
}

export default ProjectModule