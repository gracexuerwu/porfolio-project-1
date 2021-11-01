import React from "react";
import GithubButton from "./GithubButton";
import ViewLiveSiteButton from "./ViewLiveSiteButton";
import "../styles/ProjectShowcaseRow.css";

export default function ProjectShowcaseRow(props) {
    return (
        <div class="row project-page-row">
            <div class="col-sm-6">
                <img
                    src={props.image}
                    class="img-fluid text-center placeholder-img rounded"
                    alt={props.alt}
                />
            </div>
            <div class="col-sm-6">
                <h4 class="mb-3 text-muted">Design + Code</h4>
                <p>
                    {props.description}
                </p>
                <div class="d-flex justify-content-start">
                    <ViewLiveSiteButton link={props.liveSiteLink} />
                    <GithubButton link={props.githubLink} />
                </div>
            </div>
        </div>
    )
}