import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<News key="home" category="all" />} />
                    <Route path="/business" element={<News key="business" category="business" />} />
                    <Route
                        path="/entertainment"
                        element={<News key="entertainment" category="movies" />}
                    />
                    <Route path="/science" element={<News key="science" category="science" />} />
                    <Route path="/sports" element={<News key="sports" category="sports" />} />
                    <Route
                        path="/technology"
                        element={<News key="technology" category="technology" />}
                    />
                    <Route
                        path="/automobile"
                        element={<News key="science" category="automobile" />}
                    />
                    <Route path="/politics" element={<News key="science" category="politics" />} />
                    <Route path="/travel" element={<News key="science" category="travel" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
