import { useState } from "react";
import CalculatorApp from "./Components/CalculatorApp";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("1");

  return (
    <CalculatorApp theme={theme} setTheme={setTheme}>
      <div className="text-textColor text-center font-thin">
        Challenge by{" "}
        <a
          className="text-equalsKey hover:text-equalsKeyShadow font-normal hover:underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-equalsKey hover:text-equalsKeyShadow font-normal hover:underline"
          href="https://github.com/pierre-castro"
        >
          Pierre Castro
        </a>
        .
      </div>
    </CalculatorApp>
  );
}

export default App;
