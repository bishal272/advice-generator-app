import Advice from "./components/Advice";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Advice />
            <footer>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://github.com/bishal272" target="_blank">
                    Bishal Sarkar
                </a>
            </footer>
        </div>
    );
}

export default App;
