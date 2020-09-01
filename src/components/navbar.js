import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "./navbar.module.css"

const Navbar = ({ siteTitle, menuLinks }) => (
    <div className={style.topcontainer}>
        <div className={style.container}>
            <div className={style.logobox}>
                <h1 className={style.logotext}>{ siteTitle }</h1>
            </div>
            <div className={style.nav}>
                <nav>
                    <ul className={style.navelement}>
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
            <div className={style.ftr}>
                <div className={style.ftrelement}>
                    <p>&#128296; with Gatsby | &#128640; with Netlify</p>
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    </div>
)

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}

export default Navbar