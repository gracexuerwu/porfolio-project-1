import React from "react";
import "../styles/PortfolioTypeComp.css";
import AtomLogo from "../images/atom.png";
import QuestionPersonLogo from "../images/question-mark-inside-a-bald-male-side-head-outline.png";
import PeopleLogo from "../images/people-hand-drawn-persons-group.png";
import TreesLogo from "../images/trees-outline.png";


export default function PortfolioTypeComp() {
    return (
        <div className="second-page">
            <div className="portfolio-type d-flex flex-column">
                <a href="#frontEnd-section" className="portfolio-link"
                >01 / Front-end Dev. <img src={AtomLogo} width="45px" alt=""
                    /></a>
                <a href="#userResearch-section" className="portfolio-link">
                    02 / User Research
                    <img
                        src={QuestionPersonLogo}
                        width="45px" alt=""
                    />
                </a>
                <a href="#socialDesign-section" className="portfolio-link">
                    03 / Social Design
                    <img src={PeopleLogo} width="45px" alt="" />
                </a>
                <a href="#sus-section" className="portfolio-link">
                    04 / Sustainability
                    <img src={TreesLogo} width="45px" alt="" />
                </a>
            </div>
        </div>
    )
}