import { useState } from "react";
import Advice from "./components/Advice";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Advice />
            <footer>
                Challenge by
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    {" "}
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Your Name Here</a>
            </footer>
        </div>
    );
}

export default App;
