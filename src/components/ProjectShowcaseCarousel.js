import React from "react";

export default function ProjectShowcaseCarousel(props) {
    return (
        <div className="row project-page-row flex-column-reverse flex-sm-row">
            <div className="col-sm-6">
                <h4 className="mb-3 text-muted">
                    {props.projType}
                </h4>
                <p>
                    {props.description}
                </p>
                <div className="d-flex justify-content-start">
                    <a href="#" class="btn-slide"
                    ><div>View report</div>
                        <i className="fas fa-chevron-right"></i
                        ></a>
                </div>
            </div>
            <div className="col-sm-6">
                <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={props.picOne}
                                className="d-block w-100 rounded placeholder-img"
                                alt={props.alt}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={props.picTwo}
                                className="d-block w-100 rounded placeholder-img"
                                alt="Motivating girls to join the STEM world Project"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}