import React from "react";
import HeroComp from "./HeroComp";
import PortfolioTypeComp from "./PortfolioTypeComp";
import ProjectShowcaseComp from "./ProjectShowcaseComp";
import FooterComp from "./FooterComp";
import "../styles/Home.css"

export default function Home() {
    return (
        <div class="body">
            <HeroComp />
            <PortfolioTypeComp />
            <ProjectShowcaseComp />
            <FooterComp />
        </div>
    )
}