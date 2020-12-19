  import React from "react";

function Navigation(){
    return(
        <div className="nav-body">
            <ul className="navbar-ul">
            <li key='1' className='navbar-li'><a className="navbar" href='/'>
                Home</a></li>

            <li key='2' className='navbar-li'><a className="navbar" href='/all-posts'>
                All Posts</a></li>
                <li key='3' className='navbar-li'><a className="navbar" href='/'>
                Search</a></li>
                <li key='4' className='navbar-li'><a className="navbar" href='/'>
                About</a></li>
            </ul>
        </div>
    )
}

export default Navigation;