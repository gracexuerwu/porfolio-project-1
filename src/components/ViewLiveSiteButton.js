import React from "react";
import "../styles/ViewLiveSiteButton.css"

export default function ViewLiveSiteButton(props) {
    return (
        <a
            href={props.liveSiteLink}
            class="btn-slide"
            target="_blank"
            rel="noreferrer"
        ><div>View live site</div>
            <i class="fas fa-chevron-right"></i>
        </a>
    )
}