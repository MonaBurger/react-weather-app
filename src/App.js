import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hamburg" />
        <footer>
          This project was coded by Mona Burger and is{" "}
          <a
            href="https://github.com/MonaBurger/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
