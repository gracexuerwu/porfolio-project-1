import React from "react";
import FooterSocialButtons from "./FooterSocialButtons";
import "../styles/FooterSocialButtons.css";
import "../styles/FooterComp.css"
import ReactAtomLogo from "../images/Reactatom.png";

export default function FooterComp() {
    return (
        <footer>
            <div className="container icon-container">
                <FooterSocialButtons />
                <div className="signature text-center">
                    ©2021 Grace Wu This website was built by Grace Wu with React <img src={ReactAtomLogo} width="15px" class="react-logo" alt="" /> and
                    <a
                        href="https://github.com/gracexuerwu/portfolio-project"
                        target="_blank"
                        rel="noreferrer"
                        className="open-source-link"
                    >open-sourced</a>
                    on Github
                </div>
            </div>
        </footer>
    )
}