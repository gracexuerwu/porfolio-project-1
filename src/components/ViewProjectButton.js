import React from "react";
import "../styles/ViewProjectButton.css"

export default function ViewLiveSiteButton(props) {
    return (
        <a
            href={props.projectLink}
            class="btn-slide"
            target="_blank"
            rel="noreferrer"
        ><div>View Project</div>
            <i class="fas fa-chevron-right"></i>
        </a>
    )
}