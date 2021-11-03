import React from "react";
import "../styles/FooterSocialButtons.css";

export default function FooterSocialButtons() {
    return (
        <div>
            <div className="wrapper d-flex justify-content-center">
                <a href="https://github.com/gracexuerwu" target="_blank">
                    <div className="icon github">
                        <div className="tooltip">Github</div>
                        <span><i className="fab fa-github"></i></span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/grace-ade-wu/" target="_blank">
                    <div className="icon linkedin">
                        <div className="tooltip">Linkedin</div>
                        <span><i className="fab fa-linkedin"></i></span>
                    </div>
                </a>
                <a href="mailto:grace.xuer.wu@gmail.com" target="_blank">
                    <div className="icon email">
                        <div className="tooltip">Email</div>
                        <span><i className="fas fa-envelope"></i></span>
                    </div>
                </a>
            </div>
        </div>
    )
}