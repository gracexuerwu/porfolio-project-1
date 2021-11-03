import React from "react";
import "../styles/NavbarComp.css";
import { Link, Route } from 'react-router-dom'

export default function NavbarComp() {
    return (
        <div className="container">
            <nav
                className="navbar fixed-top navbar-expand-lg navbar-light"
                style={{ color: "#e7e6e3" }}
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
                            <Link to="/" className="nav-link active navbar-font mx-2" aria-current="page" title="Projects">Projects</Link>
                            <Link to="/about" className="nav-link navbar-font mx-2" title="About">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}