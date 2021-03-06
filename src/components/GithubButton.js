import React from "react";
import "../styles/GithubButton.css"

export default function GithubButton(props) {
    return (
        <a
            href={props.githubLink}
            class="btn-fill"
            target="_blank"
            rel="noreferrer"
        ><div>Github</div>
        </a>
    )
}