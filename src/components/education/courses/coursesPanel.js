import React from "react"
import Treemap from "./Treemap"
import styles from "./coursesPanel.module.scss"

var data = require("../../../content/courses.json")

function CoursesPanel() {
    return (
        <div className={styles.panel}>
            <Treemap width={400} height={570} data={data}/>
        </div>
    )
}

export default CoursesPanel