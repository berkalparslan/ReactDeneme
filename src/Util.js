import React from 'react';
import { Redirect } from 'react-router-dom'


export function control() {

    sessionControl()

    const user = sessionStorage.getItem("user")
    //console.log("user: " + user)
    if (user === null) {
        return (
            <Redirect to="/"></Redirect>
        )
    }
}

export function loginControl() {

    sessionControl()
    
    const user = sessionStorage.getItem("user")
    console.log("user: " + user)
    if (user !== null) {
        return (
            <Redirect to="/dashboard"></Redirect>
        )
    }


}

const sessionControl = () => {
    //local
    const local = localStorage.getItem("user")
    if (local !== null) {
        sessionStorage.setItem("user", local)
    }
}

const fncExit = () => {
    const userId = sessionStorage.getItem("user");
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    control();
}

export const header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a onClick={ () => fncExit() } className="dropdown-item" >Exit</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}