import { useContext } from "react";
import BMIInput from "./components/BmiInputs.Jsx";
import BMIResult from "./components/BmiResult";
import UnitToggle from "./components/BmiToggle";
import { BMIContext } from "./context/bmiContext";
import "./styles/style.css";

function App() {
  const { showResult } = useContext(BMIContext);

  return (
    <div className="app-container">
      <h1>BMI CALCULATOR</h1>
      <UnitToggle />
      <BMIInput />
      {showResult && <BMIResult />}
    </div>
  );
}

export default App;
