import React from "react";
import "../styles/ProjectShowcaseRow.css"
import GithubButton from "./GithubButton";
import ViewLiveSiteButton from "./ViewLiveSiteButton";

export default function ProjectShowcaseRowReverse(props) {
    return (
        <div className="row project-page-row flex-column-reverse flex-sm-row">
            <div className="col-sm-6">
                <h4 className="mb-3 text-muted">Design + Code</h4>
                <p>
                    {props.description}
                </p>
                <div className="d-flex justify-content-start">
                    <ViewLiveSiteButton link="https://hungry-yalow-e0bde5.netlify.app/" />
                    <GithubButton link="https://github.com/gracexuerwu/weather-app-1-react" />
                </div>
            </div>
            <div className="col-sm-6">
                <img
                    src={props.image}
                    className="img-fluid text-center placeholder-img rounded"
                    alt={props.alt}
                />
            </div>
        </div>
    )
}