import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Logo from "./logo"
import styles from "./navbar.module.scss"

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
                <div className={styles.filler}>
                </div>
                <div className={styles.ftr}>
                    <div className={styles.ftrelement}>
                        <p>
                            &#128296; with Gatsby | &#128640; with Netlify
                            <br/>
                            Made by Alex Han | © {new Date().getFullYear()}
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

export default Navbar