import React from "react";

export default function HeroComp() {
    return (
        <div>
            <div className="hero">
                <h1>
                    Inqusitive <img src="images/eye-hand-drawn-variant.png" width="40px" />
                    <span className="monospace-font">multidisplinary designer</span>
                    <img src="images/crayon-hand-drawn-toy.png" width="40px" />
                    <span className="monospace-font-no-highlight">&</span>
                    <br />
                    <span className="monospace-font">developer</span>
                    <img src="images/terminal-hand-drawn-symbol.png" width="40px" />
                    based in Switzerland
                    <img
                        src="images/mountain-landscape-with-trees-and-sun.png"
                        width="45px"
                    />
                    with a focus on <span className="monospace-font">Design Management</span>.
                    <span className="smiley-font">b</span>
                </h1>
                <br />
                <p>Scroll down to view my work ↓</p>
            </div>
        </div>
    )
}