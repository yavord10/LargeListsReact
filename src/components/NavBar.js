import React from 'react'

export default function NavBar(props) {
    return (
        <nav className="nav navbar fixed-top">
                <li className="nav-item nav-link ml-auto mr-1 sortStart" id="clicked" onClick={props.handleSort}>Sort by StartDate</li>
                <li className="nav-item nav-link mx-1 sortEvent" onClick={props.handleSort}>Sort by Event</li>
        </nav>
    )
}
