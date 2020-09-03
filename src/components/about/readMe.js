import React from "react"
import styles from "./readMe.module.scss"

// import { faLinkedinIn, faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons"
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Profile from "./profile"

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
                    <a href="#" className={styles.social}>[resume]</a>
                </div>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default ReadMe