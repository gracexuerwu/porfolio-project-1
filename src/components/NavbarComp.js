import React from "react";
import "../styles/NavbarComp.css";
import { NavLink } from 'react-router-dom'

export default function NavbarComp() {
    return (
        <div className="container">
            <nav
                className="navbar fixed-top navbar-expand-lg navbar-light"
                style={{ color: "#0000" }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand navbar-font" href="/" title="Homepage"
                    >Grace Wu <span class="laobrige-font">4</span></a
                    >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <NavLink exact activeClassName="active" to="/" className="nav-link navbar-font mx-2" aria-current="page" title="Projects">Projects</NavLink>
                            <NavLink activeClassName="active" to="/about" className="nav-link navbar-font mx-2" title="About">About</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}