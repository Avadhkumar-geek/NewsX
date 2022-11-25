import React from "react";
import spinner from "./imgs/loader.gif";

export default function Spinner() {
    return (
        <div className="text-center" style={{ marginTop: "200px" }}>
            <img src={spinner} height="200px" width="200px" alt="Loading..." />
        </div>
    );
}
