import React from "react"
import Treemap from "./Treemap"

var data = require("../../../content/courses.json")

function CoursesPanel() {
    return (
        <div>
            <Treemap width={600} height={400} data={data}/>
        </div>
    )
}

export default CoursesPanel