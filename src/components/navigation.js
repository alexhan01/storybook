import React, { Component, useState } from "react"
import Navbar from "./navbar"

// class Navigation extends Component {
//     render() {
//         return (
//             <>
//                 <button onClick={() => this.toggleMenu()}>Open Menu</button>

//                 <Menu ref={el => (this.childMenu = el)}/>
//             </>
//         )
//     }
    
//     toggleMenu() {
//         this.childMenu.open()
//     }
// }

const Navigation = ({ menuLinks }) => {
    return (
        <>
            <button>Open Menu</button>
            <Navbar menuLinks={ menuLinks } />
        </>
    )
}

export default Navigation