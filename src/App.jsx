import { useContext } from "react";
import BMIInput from "./components/BmiInputs.jsx";
import BMIResult from "./components/BmiResult";
import UnitToggle from "./components/BmiToggle";
import { BMIContext } from "./context/bmiContext";
import { Link } from "react-router-dom";
import "./styles/style.css";

function App() {
  const { showResult } = useContext(BMIContext);

  return (
    <div className="app-container">
      <h1>BMI CALCULATOR</h1>
      <UnitToggle />
      <BMIInput />
      {showResult && <BMIResult />}
      <button className="save-btn">
        <Link to={"/saveRecords"} className="link-btn">Save The Records</Link>
      </button>
    </div>
  );
}

export default App;
