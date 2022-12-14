import React from "react";
import BrandLogo from "./imgs/brand.svg";
import BrandName from "./imgs/brand2.svg";
import gitHub from "./imgs/github.svg";
import themeIcon from "./imgs/theme.png";
import { Link } from "react-router-dom";

export default function NavBar({ setTextTheme, setTheme, theme, textTheme }) {
    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
            setTextTheme("text-light");
        } else {
            setTheme("light-theme");
            setTextTheme("text-dark");
        }
        document.body.classList.toggle("dark-theme");
    };

    return (
        <div>
            <nav className={`navbar navbar-expand fixed-top d-block ${theme}`}>
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand mx-3" to="/">
                        <img src={BrandLogo} height="40" alt="" />
                        <img src={BrandName} height="40" alt="" />
                    </Link>
                    <div className="form-check form-switch ms-auto">
                        <input
                            className="form-check-input"
                            onClick={toggleTheme}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <img src={themeIcon} alt="Theme" htmlFor="flexSwitchCheckDefault" />
                    </div>
                    <a
                        className="mx-3"
                        href="https://github.com/Avadhkumar-geek/NewsX"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img src={gitHub} height="25" width="25" alt="" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`nav mx-auto mb-2 mb-lg-0 ${theme}`}>
                        <li className="nav-item">
                            <Link className={`nav-link text-decoration-none ${textTheme}`} to="/">
                                All
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link text-decoration-none ${textTheme}`}
                                to={"/sports"}
                            >
                                Sports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link text-decoration-none ${textTheme}`}
                                to={"/business"}
                            >
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link text-decoration-none ${textTheme}`}
                                to={"/entertainment"}
                            >
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${textTheme}`}
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                More
                            </a>
                            <ul className={`dropdown-menu ${theme}`}>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link text-decoration-none ${textTheme}`}
                                        to={"/technology"}
                                    >
                                        Technology
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link text-decoration-none ${textTheme}`}
                                        to={"/science"}
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link text-decoration-none ${textTheme}`}
                                        to={"/travel"}
                                    >
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
