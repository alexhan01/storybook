import React from "react"
import styles from "./ContentPanel.module.scss"

function ContentPanel(props) {
    return (
        <>
            <div className={styles.content}>
                <p>{props.data}</p>
            </div>
        </>
    )
}

export default ContentPanel