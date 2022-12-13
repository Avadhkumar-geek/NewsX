import "./App.css";
import { React, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState("light-theme");
    const [textTheme, setTextTheme] = useState("text-dark");

    return (
        <>
            <BrowserRouter>
                <NavBar
                    theme={theme}
                    textTheme={textTheme}
                    setTheme={setTheme}
                    setTextTheme={setTextTheme}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <News key="home" category="all" theme={theme} textTheme={textTheme} />
                        }
                    />
                    <Route
                        path="/business"
                        element={
                            <News
                                key="business"
                                category="business"
                                theme={theme}
                                textTheme={textTheme}
                            />
                        }
                    />
                    <Route
                        path="/entertainment"
                        element={
                            <News
                                key="entertainment"
                                category="movies"
                                theme={theme}
                                textTheme={textTheme}
                            />
                        }
                    />
                    <Route
                        path="/science"
                        element={
                            <News
                                key="science"
                                category="science"
                                theme={theme}
                                textTheme={textTheme}
                            />
                        }
                    />
                    <Route
                        path="/sports"
                        element={
                            <News
                                key="sports"
                                category="sports"
                                theme={theme}
                                textTheme={textTheme}
                            />
                        }
                    />
                    <Route
                        path="/technology"
                        element={
                            <News
                                key="technology"
                                category="technology"
                                theme={theme}
                                textTheme={textTheme}
                            />
                        }
                    />
                    <Route
                        path="/travel"
                        element={
                            <News
                                key="science"
                                category="travel"
                                theme={theme}
                                textTheme={textTheme}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
