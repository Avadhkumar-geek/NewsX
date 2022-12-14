import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function NewsCard({ theme, textTheme, ...props }) {
    return (
        <div className={`container`}>
            <div className="card" style={{ minWidth: "16rem" }}>
                <LazyLoadImage src={props.imgUrl} className="card-img-top" alt="..." />
                <div className={`card-body ${theme}`}>
                    <h6 className="card-title ">{props.title}</h6>
                    <p style={{ fontSize: "14px" }}>{props.description}</p>
                    <p style={{ fontSize: "13px" }}>
                        {" "}
                        Published on {new Date(props.publishDate).toDateString()}
                    </p>
                    <a
                        href={props.newsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}
