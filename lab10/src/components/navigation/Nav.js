import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <div id = "navContainer" className = "container">
            <section id = "postSection">
            <Link to = "/posts" style = {navStyle}> Posts</Link>
            </section>
            <section id = "newPostSection">
              <Link to = "/newposts" style = {navStyle}> New Posts </Link>
            </section>
            <section id = "signinSection">
            <Link to = "/signin" style = {navStyle}> Sign In </Link>
            </section>
        </div>
    )
}

export default Nav
