import React from "react"
import styles from "./readMe.module.scss"

import { faLinkedinIn, faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ReadMe(props) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.readmetext}>
                <p>ReadMe.md</p>
            </div>
            <div className={styles.content}>
                <p>{props.data}</p>
            </div>
            <div className={styles.socials}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialicon}/>
                <FontAwesomeIcon icon={faGithub} className={styles.socialicon}/>
                <FontAwesomeIcon icon={faMediumM} className={styles.socialicon} />
                <FontAwesomeIcon icon={faEnvelope} className={styles.socialicon}/>
            </div>
        </div>
        </>
    )
}

export default ReadMe