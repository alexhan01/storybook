import React from "react"
import styles from "./readMe.module.scss"
import Profile from "./profile"
import resume from "../../../static/resume.pdf"

function ReadMe(props) {
    return (
        <>
        <div className={styles.main}>
            <div></div>
            <div className={styles.container}>
                <Profile />
                <div className={styles.readmetext}>
                    ReadMe.md
                </div>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{__html: props.data}} />
                </div>
                <div className={styles.socials}>
                    <a href="https://linkedin.com/in/alexhan01" target="_blank" className={styles.social}>[linkedin]</a>
                    <a href="https://github.com/alexhan01" target="_blank" className={styles.social}>[github]</a>
                    <a target="_blank" href={resume} target="_blank" rel="noreferrer" className={styles.social}>[resume]</a>
                </div>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default ReadMe