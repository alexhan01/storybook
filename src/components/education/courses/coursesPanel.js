import React from "react"
import Treemap from "./Treemap"
import styles from "./coursesPanel.module.scss"

var data = require("../../../content/courses.json")

function CoursesPanel() {
    return (
        <div className={styles.panel}>
            <Treemap width={800} height={500} data={data}/>
        </div>
    )
}

export default CoursesPanel