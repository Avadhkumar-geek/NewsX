import React from "react";
import BrandLogo from "./imgs/brand.svg";
import BrandName from "./imgs/brand2.svg";
import gitHub from "./imgs/github.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-light fixed-top d-block">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={BrandLogo} height="40" alt="" />
                        <img src={BrandName} height="40" alt="" />
                    </Link>
                    <a
                        href="https://github.com/Avadhkumar-geek/NewsX"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img src={gitHub} height="25" width="25" alt="" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                All
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sports"}>
                                Sports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/business"}>
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/entertainment"}>
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/technology"}>
                                        Technology
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/science"}>
                                        Science
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/automobile"}>
                                        Automobile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/politics"}>
                                        Politics
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/travel"}>
                                        Travel
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
