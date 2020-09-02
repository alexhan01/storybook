import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Logo from "./logo"
import styles from "./navbar.module.scss"

// const NavButton = ({ onClick }) => {
//     return (
//         <button onClick={onClick}>Open</button>
//     );
// }

const Navbar = ({ menuLinks }) => {
    return (
        <>
        <div className={styles.topcontainer}>
        {/* <div className={`${styles.topcontainer} ${isOpen ? `${styles.open}` : ""}`}> */}
            <div className={styles.container}>
                <div className={styles.logobox}>
                    <Logo />
                </div>
                <div className={styles.nav}>
                    <nav>
                        <ul className={styles.navelement}>
                            {menuLinks.map(link => (
                                <li key={link.name}>
                                    <Link style={{ color: `white`}} to={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={styles.ftr}>
                    <div className={styles.ftrelement}>
                        <p>&#128296; with Gatsby | &#128640; with Netlify</p>
                        <p>© {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}

export default Navbar

// export default class Navigation extends Component {
//     state = {
//         isOpen: false,
//     };

//     toggleMenu = () => this.setState(state => ({
//         isOpen: !state.isOpen,
//     }));

//     render() {
//         return (
//             <div>
//                 <NavButton onClick={this.toggleMenu} />
//                 <Navbar isOpen={this.state.isOpen} menuLinks={menuLinks}/>
//             </div>
//         );
//     }
// }