import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Logo from "./logo"
import styles from "./navbar.module.scss"
import { faHammer, faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// const NavButton = ({ onClick }) => {
//     return (
//         <button onClick={onClick}>Open</button>
//     );
// }

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query NavBarQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const menuLinks = data.site.siteMetadata.menuLinks

    return (
        <>
        <div className={styles.topcontainer}>
            <div className={styles.container}>
                <div className={styles.logobox}>
                    <Logo />
                </div>
                <div className={styles.nav}>
                    <nav>
                        <ul className={styles.navelement}>
                            {menuLinks.map(link => (
                                <li key={link.name}>
                                    <Link
                                        className={styles.Link}
                                        to={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={styles.ftr}>
                    <div className={styles.ftrelement}>
                        <p>
                            {/* <FontAwesomeIcon icon={faHammer}/> */}
                            &#128296; with Gatsby | &#128640; 
                            {/* <FontAwesomeIcon icon={faRocket}/>  */}
                            with Netlify
                            <br/>
                            © {new Date().getFullYear()}
                        </p>
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

// function Navigation(menuLinks) {
//     const [toggled, setToggled] = useState(false);

//     function handleMenuOpen() {
//         setToggled(true);
//     }

//     function handleMenuClose() {
//         setToggled(false);
//     }

//     return (
//         <div>
//             <button onClick={handleMenuOpen}>Menu</button>
//             <Navbar show={!toggled}/>
//         </div>
//     )
// }

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