import React from "react";
import "../styles/ProjectSectionTitle.css";

export default function ProjectSectionTitle(props) {
    return (
        <h2 id={props.idClass}>
            <span className="project-page-highlight">
                {props.heading}
                <img src={props.logo} width="40px" class="illustration-img" alt=""
                /></span>
        </h2>
    )
}