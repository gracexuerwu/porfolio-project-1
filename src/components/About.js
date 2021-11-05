import React from "react";
import "../styles/About.css"
import FooterComp from "./FooterComp";

//images
import ComputerLogo from "../images/computer-mouse-and-monitor.png";
import GroupLogo from "../images/people-hand-drawn-persons-group.png";
import MountainsLogo from "../images/country-mountains-and-trees-view (1).png";
import BookLogo from "../images/book-hand-drawn-opened-bookmarked-reading-educational-tool.png";
import MoleculeLoge from "../images/molecule.png";
import BioPicture from "../images/Polaroid_Export.png";


export default function About() {
    return (
        <div>
            <div class="about-section container">
                <div className="row about-section-row flex-column-reverse flex-lg-row">
                    <div className="col-md-8">
                        <div className="about-section-content">
                            <h1><div>Hey there! I'm Grace <span class="smiley-font" alt="">b</span></div>
                                I’m a self-taught <span className="monospace-font"> front-end developer</span>, writing
                                code and moving pixels in the <span class="monospace-font">www</span><img src={ComputerLogo} width="27px" class="about-img" alt="" /> . I’m currently pursuing a BA in <span className="monospace-font">Design Management</span>, seeking to create human-centred design for and with people <img src={GroupLogo} width="27px" class="about-img" alt="" /> . When
                                the internet is down you can find me frolicking in the woods or alps <img src={MountainsLogo} width="27px" class="about-img" alt="" /> , cooking
                                or reading a book <img src={BookLogo} width="27px" class="about-img" alt="" />.
                            </h1>
                            <h2>
                                I am open to <span class="monospace-font">internships</span> <img src={MoleculeLoge} width="20px" class="about-img" alt="" /> and <span class="monospace-font">full-time positions</span> in the front-end
                                development or service design field.
                            </h2>
                            {/* eslint-disable-next-line */}
                            <a href="#" className="cv-link">View my CV → </a>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center">
                        <img src={BioPicture} alt="Grace Wu's profile" class="img-fluid profile-pic" />
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    )
}