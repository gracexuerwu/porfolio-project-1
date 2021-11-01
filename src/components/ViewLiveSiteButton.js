import React from "react";
import "../styles/ViewLiveSiteButton.css"

export default function ViewLiveSiteButton(props) {
    return (
        <a
            href={props.link}
            class="btn-slide"
            target="_blank"
        ><div>View live site</div>
            <i class="fas fa-chevron-right"></i>
        </a>
    )
}