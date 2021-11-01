import React from "react";
import "../styles/GithubButton.css"

export default function GithubButton(props) {
    return (
        <a
            href={props.link}
            class="btn-fill"
            target="_blank"
        ><div>Github</div>
        </a>
    )
}