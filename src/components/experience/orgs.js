import React from "react"
import styles from "./orgs.module.scss"

import cahsmun from "../../images/orgs/cahsmun.jpg"
import nibc from "../../images/orgs/NIBC.png"
import jdc from "../../images/orgs/sauderjdcwest.png"
import ubc from "../../images/orgs/ubc.png"
import lpad from "../../images/orgs/launchpad.png"

function Orgs() {
    return (
        <div className={styles.container}>
            <div className={styles.cahsmun}>
                <img src={cahsmun} alt="CAHSMUN"/>
            </div>
            <div className={styles.nibc}>
                <img src={nibc} alt="NIBC"/>
            </div>
            <div className={styles.jdc}>
                <img src={jdc} alt="JDC"/>
            </div>
            <div className={styles.ubc}>
                <img src={ubc} alt="UBC"/>
            </div>
            <div className={styles.lpad}>
                <img src={lpad} alt="Launch Pad"/>
            </div>
        </div>
    )
}  

export default Orgs