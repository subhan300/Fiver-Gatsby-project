import React from 'react'
import {Link} from "gatsby"
import "./Header.css"
function Header() {
    return (
        <div className="Header">
            <Link to="/" className="header_link"><div>HOME PAGE</div></Link>
            <Link to="/Blog" className="header_link"><div>BLOG PAGE</div></Link>
            <Link to="/Portfolio" className="header_link"><div>PORTFOLIO PAGE</div></Link>
        </div>
    )
}

export default Header
