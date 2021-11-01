import React from "react";
import "../styles/ProjectShowcaseComp.css";
import ProjectShowcaseRow from "./ProjectShowcaseRow";
import ProjectShowcaseRowReverse from "./ProjectShowcaseRowReverse";
import ProjectSectionTitle from "./ProjectSectionTitle";
import ProjectShowcaseCarousel from "./ProjectShowcaseCarousel";
import ProjectCarouselComp from "./ProjectCarouselComp";
import ProjectDescriptionComp from "./ProjectDescriptionComp";


//images import
import AtomLogo from "../images/atom.png";
import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail.png"
import ReactWeatherAppThumbnail from "../images/ReactWeatherApp_Thumbnail.png";
import DictionaryAppThumbnail from "../images/ReactDictApp_Thumbnail.png";
import QuestionPersonLogo from "../images/question-mark-inside-a-bald-male-side-head-outline.png";
import Schindler2Thumbnail from "../images/Schindler2_Thumbnail.png";
import Schindler3Thumbnail from "../images/Schindler3_Thumbnail.png";
import PeopleLogo from "../images/people-hand-drawn-persons-group.png";
import SexualHealth1 from "../images/Sexualhealth1_Thumbnail.png"
import SexualHealth2 from "../images/Sexualhealth2_Thumbnail.png"


export default function ProjectShowcaseComp() {
    return (
        <div className="project-page">
            <ProjectSectionTitle logo={AtomLogo} heading="01/ Front-end Development" idClass="frontEnd-section" />
            <ProjectShowcaseRow image={WeatherAppThumbnail} alt="Vanilla Javascript Weather App" description="Weather application coded with Vanilla Javascript with
                    Openweathermap API integration for live weather information.
                    Features a day & night background which changes according to your
                    local time." liveSiteLink="https://dazzling-meitner-238069.netlify.app/" githubLink="https://github.com/gracexuerwu/vanilla-weather-app" />
            <ProjectShowcaseRowReverse image={ReactWeatherAppThumbnail} alt="React.js Weather App" description="Iterated version of the previous weather app but in React.js. It
                    allows you to search for the weather at any location. Includes a
                    Celcius and Fahrenheit temperature slider. Created with
                    OpenWeatherMap API integration for live weather information." liveSiteLink="https://hungry-yalow-e0bde5.netlify.app/" githubLink="https://github.com/gracexuerwu/weather-app-1-react" />
            <ProjectShowcaseRow image={DictionaryAppThumbnail} alt="React.js Dictionary Appanilla Javascript Weather App" description="React App that allows you to search for any word definition and
                    pronunciation. Includes pictures that are associated with the
                    searched word. Created with Dictionary API and Pexels API." liveSiteLink="https://loving-mccarthy-677ab0.netlify.app/" githubLink="https://github.com/gracexuerwu/dictionary-project-react" />
            <ProjectSectionTitle logo={QuestionPersonLogo} heading="02 / User Research" idClass="userResearch-section" />
            <ProjectShowcaseCarousel projType="Ethnographic research + Prototype design" description="The project scope is based around the problem: Why working as an elevator technician is not considered as a career for young Swiss women? and what can be done to change this reality? The problem is more than meets the eye." alt="Motivating girls to join the STEM world Project" picOne={Schindler2Thumbnail} picTwo={Schindler3Thumbnail} />
            <ProjectSectionTitle logo={PeopleLogo} heading="03 / Social Design" idClass="socialDesign-section" />
            <div class="row project-page-row">
                <div class="col-sm-6">
                    <ProjectCarouselComp imageOne={SexualHealth1} imageTwo={SexualHealth2} alt="Engaging girls to take charge of their sexual health Project" />
                </div>
                <div class="col-sm-6">
                    <ProjectDescriptionComp projType=" Ethnographic research + Prototype design" description="The scope of the project is to tackle a social issue, which is the
            lack of accessibility and availabe services that offer a discreet
            sexual health services and information to girls and young women." />
                </div>
            </div>
        </div>
    )
}