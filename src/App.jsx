import { useState } from "react";
import CalculatorApp from "./Components/CalculatorApp";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("1");

  return <CalculatorApp theme={theme} setTheme={setTheme} />;
}

export default App;
