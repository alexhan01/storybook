import React from "react"
import styles from "./projectModule.module.scss"

function ProjectModule(props) {
    return (
        <>
        <div>
            <div>
                <p>
                    {props.project.title}
                </p>
                <p>
                    {props.project.github}
                </p>
            </div>
            <div>
                <p>
                    {props.project.description}
                </p>
            </div>
            <div>
                <p>
                    {props.project.tags}
                </p>
            </div>
        </div>
        </>
    )
}

export default ProjectModule