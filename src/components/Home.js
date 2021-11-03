import React from "react";
import HeroComp from "./HeroComp";
import PortfolioTypeComp from "./PortfolioTypeComp";
import ProjectShowcaseComp from "./ProjectShowcaseComp";
import FooterComp from "./FooterComp";

export default function Home() {
    return (
        <div>
            <HeroComp />
            <PortfolioTypeComp />
            <ProjectShowcaseComp />
            <FooterComp />
        </div>
    )
}