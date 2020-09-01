import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "./navbar.module.css"


// const Navbar = ({ siteTitle, menuLinks }) => (
//     <header
//       style={{
//         background: "rebeccapurple",
//         marginBottom: "1.45rem",
//       }}
//     >
//       <div
//         style={{
//           background: "rebeccapurple",
//           marginBottom: "1.45rem",
//         }}
//       >
//         <div
//           style={{
//             margin: "0 auto",
//             maxWidth: 960,
//             padding: "1.45rem 1.0875rem",
//             display: "flex",
//             justifyItems: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ margin: 0, flex: 1 }}>
//             <Link
//               to="/"
//               style={{
//                 color: "white",
//                 textDecoration: "none",
//               }}
//             >
//               {siteTitle}
//             </Link>
//           </h1>
//           <div>
//             <nav>
//               <ul style={{ display: "flex", flex: 1 }}>
//                 {menuLinks.map(link => (
//                   <li
//                     key={link.name}
//                     style={{
//                       listStyleType: `none`,
//                       padding: `1rem`,
//                     }}
//                   >
//                     <Link style={{ color: `white` }} to={link.link}>
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   )

const Navbar = ({ siteTitle, menuLinks }) => (
    <div className={style.topcontainer}>
        <div className={style.container}>
            <div className={style.logo}>
                <h1>{siteTitle}</h1>
            </div>
            <div className={style.nav}>
                <nav>
                    <ul style={{ display: "flex", flex: 1 }}>
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