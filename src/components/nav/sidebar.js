import React, { Component } from "react"

import Navigation from "./navigation"
import styles from "./sidebar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Sidebar extends Component {
    render() {
        return (
            <>
                <button className={styles.burger} onClick={() => this.toggleMenu()}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <Navigation ref={el => (this.childMenu = el)} />
            </>
        )
    }

    toggleMenu() {
        if (this.childMenu.open === true) {
            this.childMenu.close()
        } else {
            this.childMenu.open()
        }
        // this.childMenu.open()
    }
}

export default Sidebar