import React from "react";
import "../styles/ProjectShowcaseComp.css";
import ProjectSectionTitle from "./ProjectSectionTitle";
import ProjectCarouselComp from "./ProjectCarouselComp";
import ProjectDescriptionComp from "./ProjectDescriptionComp";
import ThumbnailComp from "./ThumbnailComp";
import GithubButton from "./GithubButton";
import ViewLiveSiteButton from "./ViewLiveSiteButton";
import ViewProjectButton from "./ViewProjectButton";


//images import
import AtomLogo from "../images/atom.png";
import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail.png"
import ReactWeatherAppThumbnail from "../images/ReactWeatherApp_Thumbnail.png";
import DictionaryAppThumbnail from "../images/ReactDictApp_Thumbnail.png";
import QuestionPersonLogo from "../images/question-mark-inside-a-bald-male-side-head-outline.png";
import Schindler2Thumbnail from "../images/Schindler2_Thumbnail.png";
import Schindler3Thumbnail from "../images/Schindler3_Thumbnail.png";
import PeopleLogo from "../images/people-hand-drawn-persons-group.png";
import SexualHealth1Thumbnail from "../images/Sexualhealth1_Thumbnail.png";
import SexualHealth2Thumbnail from "../images/Sexualhealth2_Thumbnail.png";
import TreesLogo from "../images/trees-outline.png";
import Carandache1Thumbnail from "../images/Carandache1_Thumbnail.png";
import Carandache2Thumbnail from "../images/Caradache2_Thumbnail.png";
import Medicalpackaging1Thumbnail from "../images/Medical packaging1_Thumbnail.png";
import Medicalpackaging2Thumbnail from "../images/Medical packaging2_Thumbnail.png";

export default function ProjectShowcaseComp() {
    return (
        <div className="project-page">
            <ProjectSectionTitle logo={AtomLogo} heading="01/ Front-end Development" idClass="frontEnd-section" />
            <div className="row project-page-row">
                <div className="col-sm-6">
                    <ThumbnailComp image={WeatherAppThumbnail} alt="Vanilla Javascript Weather App" />
                </div>
                <div className="col-sm-6">
                    <ProjectDescriptionComp projType="Design + Code" description="Weather application coded with Vanilla Javascript with Openweathermap API integration for live weather information. Features a day & night background which changes according to your local time." />
                    <div className="d-flex justify-content-start">
                        <ViewLiveSiteButton liveSiteLink="https://dazzling-meitner-238069.netlify.app/" />
                        <GithubButton githubLink="https://github.com/gracexuerwu/vanilla-weather-app" />
                    </div>
                </div>
            </div>
            <div className="row project-page-row flex-column-reverse flex-sm-row">
                <div className="col-sm-6">
                    <ProjectDescriptionComp projType="Design + Code" description="Iterated version of the previous weather app but in React.js. It
            allows you to search for the weather at any location. Includes a
            Celcius and Fahrenheit temperature slider. Created with
            OpenWeatherMap API integration for live weather information." />
                    <div className="d-flex justify-content-start">
                        <ViewLiveSiteButton liveSiteLink="https://hungry-yalow-e0bde5.netlify.app/" />
                        <GithubButton githubLink="https://github.com/gracexuerwu/weather-app-1-react" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <ThumbnailComp image={ReactWeatherAppThumbnail} alt="React.js Weather App" />
                </div>
            </div>
            <div className="row project-page-row">
                <div className="col-sm-6">
                    <ThumbnailComp image={DictionaryAppThumbnail} alt="React.js Dictionary App" />
                </div>
                <div className="col-sm-6">
                    <ProjectDescriptionComp projType="Design + Code" description="React App that allows you to search for any word definition and
            pronunciation. Includes pictures that are associated with the
            searched word. Created with Dictionary API and Pexels API." />
                    <div className="d-flex justify-content-start">
                        <ViewLiveSiteButton liveSiteLink="https://loving-mccarthy-677ab0.netlify.app/" />
                        <GithubButton githubLink="https://github.com/gracexuerwu/dictionary-project-react" />
                    </div>
                </div>
            </div>
            <ProjectSectionTitle logo={QuestionPersonLogo} heading="02 / User Research" idClass="userResearch-section" />
            <div className="row project-page-row flex-column-reverse flex-sm-row">
                <div className="col-sm-6">
                    <ProjectDescriptionComp projType="Ethnographic research + Prototype design" description="The project scope is based around the problem: Why working as an
                        elevator technician is not considered as a career for young Swiss
                        women? and what can be done to change this reality? The problem is
                        more than meets the eye." />
                    <div className="d-flex justify-content-start">
                        <ViewProjectButton projectLink="https://drive.google.com/file/d/1PXK_a3s2DDxc3ScM1EPirW37xXrJpzoY/view?usp=sharing" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <ProjectCarouselComp imageOne={Schindler2Thumbnail} imageTwo={Schindler3Thumbnail} alt="Motivating girls to join the STEM world Project" />
                </div>
            </div>
            <ProjectSectionTitle logo={PeopleLogo} heading="03 / Social Design" idClass="socialDesign-section" />
            <div className="row project-page-row">
                <div className="col-sm-6">
                    <ProjectCarouselComp imageOne={SexualHealth1Thumbnail} imageTwo={SexualHealth2Thumbnail} alt="Engaging girls to take charge of their sexual health Project" />
                </div>
                <div className="col-sm-6">
                    <ProjectDescriptionComp projType="Ethnographic research + Prototype design" description="The scope of the project is to tackle a social issue, which is the
            lack of accessibility and availabe services that offer a discreet
            sexual health services and information to girls and young women." />
                    <div className="d-flex justify-content-start">
                        <ViewProjectButton projectLink="https://drive.google.com/file/d/1J0Y47giqvQgeQTXFxWwb1zvRuC2G9a_q/view?usp=sharing" />
                    </div>
                </div>
            </div>
            <ProjectSectionTitle logo={TreesLogo} heading="04 / Sustainability" idClass="sus-section" />
            <div className="row project-page-row flex-column-reverse flex-sm-row">
                <div className="col-sm-6">
                    <ProjectDescriptionComp projType="Research + Prototype design" description="The scope of this project, is to examine an existing product in
            terms of 'Design for Sustainability' and how far have the parameters
            for this design approach been considered. Followed by developing a
            sustainable concept proposition with the core in mind, the
            implementation of a Cradle to Cradle life cycle." />
                    <div className="d-flex justify-content-start">
                        <ViewProjectButton projectLink="https://drive.google.com/file/d/1dGZY0puOUWHbls45M3IFvw4tCvRioVys/view?usp=sharing" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <ProjectCarouselComp imageOne={Carandache1Thumbnail} imageTwo={Carandache2Thumbnail} alt="Circular redesign of Caran D'ache pencils Project" />
                </div>
            </div>
            <div class="row project-page-row">
                <div class="col-sm-6">
                    <ProjectCarouselComp imageOne={Medicalpackaging1Thumbnail} imageTwo={Medicalpackaging2Thumbnail} alt="Medical packaging evaluation Project" />
                </div>
                <div class="col-sm-6">
                    <ProjectDescriptionComp projType="Research + Analysis" description="The scope of this project, is to research and identify areas of
            opportunities that would enable medical packaging, namely the
            blister product to achieve circularity in it's product lifecycle." />
                    <div class="d-flex justify-content-start">
                        <ViewProjectButton projectLink="https://drive.google.com/file/d/1YttEc0w1UM0DmRWkwN6M52hTAByGWRCN/view?usp=sharing" />
                    </div>
                </div>
            </div>
        </div>
    )
}