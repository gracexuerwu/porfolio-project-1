import React from "react";
import "../styles/ProjectShowcaseComp.css";
import ProjectShowcaseRow from "./ProjectShowcaseRow";
import ProjectShowcaseRowReverse from "./ProjectShowcaseRowReverse";

//images import
import AtomLogo from "../images/atom.png";
import WeatherAppThumbnail from "../images/WeatherApp_Thumbnail.png"
import ReactWeatherAppThumbnail from "../images/ReactWeatherApp_Thumbnail.png";
import DictionaryAppThumbnail from "../images/ReactDictApp_Thumbnail.png";

export default function ProjectShowcaseComp() {
    return (
        <div class="project-page">
            <h2 id="frontEnd-section">
                <span className="project-page-highlight">
                    01/ Front-end Development
                    <img src={AtomLogo} width="40px" class="illustration-img"
                    /></span>
            </h2>
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
        </div>
    )
}