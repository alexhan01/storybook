import React, { useImperativeHandle, useRef, Component } from "react"

import styles from "./navigation.module.scss"
import Navbar from "./navbar"

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <div
                role="button"
                tabIndex="0"
                className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
                onClick={() => this.close()}
                onKeyDown={() => this.close()}
            >
                <Navbar />
            </div>
        )
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        this.setState({ open: true })
    }
}

export default React.forwardRef((props, ref) => {
    const menuRef = useRef()

    useImperativeHandle(ref, () => ({
        open() {
            menuRef.current.open()
        },
    }))

    return <Navigation ref={menuRef} {...props} />
})