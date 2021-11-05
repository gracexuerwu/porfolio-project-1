import React from "react";
import "../styles/HeroComp.css";
import EyesLogo from "../images/eye-hand-drawn-variant.png";
import CrayonLogo from "../images/crayon-hand-drawn-toy.png";
import TerminalLogo from "../images/terminal-hand-drawn-symbol.png";
import MountainLogo from "../images/mountain-landscape-with-trees-and-sun.png";

export default function HeroComp() {
    return (
        <div>
            <div className="hero">
                <h1>
                    Inqusitive <img src={EyesLogo} width="40px" alt="" /> <span className="monospace-font">multidisplinary designer</span> <img src={CrayonLogo} width="40px" alt="" /> <span className="monospace-font-no-highlight">&</span>
                    <br />
                    <span className="monospace-font">developer</span> <img src={TerminalLogo} width="40px" alt="" /> based in Switzerland <img
                        src={MountainLogo}
                        width="45px" alt=""
                    /> with a focus on <span className="monospace-font">Design Management</span>.
                    <span className="smiley-font">b</span>
                </h1>
                <br />
                <p>Scroll down to view my work ↓</p>
            </div>
        </div>
    )
}