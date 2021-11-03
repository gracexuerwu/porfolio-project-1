import React from "react";

export default function ProjectDescriptionComp(props) {
    return (
        <div>
            <h4 className="mb-3 text-muted">
                {props.projType}
            </h4>
            <p>
                {props.description}
            </p>
        </div>
    )
}