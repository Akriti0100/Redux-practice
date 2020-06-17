import React from 'react'
import { Link,NavLink,withRouter } from 'react-router-dom'

const Navbar = (props) =>{
    /* setTimeout(() => {
        props.history.push('/About')
    }, 4000); */
    return(
        <div className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo"> Poke'Times </a>
                <ul className="center inline">
                    <li><Link to='/'>Home </Link></li>
                    <li><NavLink to='/About'>About </NavLink></li>
                    <li><NavLink to='/Contact'>Contact </NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Navbar);