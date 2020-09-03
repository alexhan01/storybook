import React from "react"
import styles from "./ContentPanel.module.scss"

function ContentPanel(props) {
    return (
        <>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: props.data}} />
            </div>
        </>
    )
}

export default ContentPanel