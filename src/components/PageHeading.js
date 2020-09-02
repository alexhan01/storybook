import React from "react"
import styles from "./PageHeading.module.scss"

function PageHeading(props) {
    return (
        <>
            <div className={styles.heading}>
                <p>{props.data}</p>
            </div>
        </>
    )
}

export default PageHeading