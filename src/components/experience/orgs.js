import React from "react"
import styles from "./orgs.module.scss"

import cahsmun from "../../images/orgs/cahsmun.jpg"
import nibc from "../../images/orgs/NIBC.png"
import jdc from "../../images/orgs/sauderjdcwest.png"
import ubc from "../../images/orgs/ubc.png"

function Orgs() {
    return (
        <div className={styles.container}>
            <img src={cahsmun} alt="CAHSMUN" className={styles.logo}/>
            <img src={nibc} alt="NIBC" className={styles.logo}/>
            <img src={jdc} alt="JDC" className={styles.logo}/>
            <img src={ubc} alt="UBC" className={styles.logo}/>
        </div>
    )
}  

export default Orgs