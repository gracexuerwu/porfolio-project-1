import React from "react";

export default function ThumbnailComp(props) {
    return (
        <img src={props.image} className="img-fluid text-center placeholder-img rounded" alt={props.alt} />
    )
}