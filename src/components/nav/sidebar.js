import React, { Component } from "react"

import Navigation from "./navigation"
import styles from "./sidebar.module.scss"

class Sidebar extends Component {
    render() {
        return (
            <>
                <button className={styles.burger} onClick={() => this.toggleMenu()}>
                    Open
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