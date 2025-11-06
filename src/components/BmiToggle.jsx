import { useContext } from "react";
import { BMIContext } from "../context/bmiContext";

const UnitToggle = () => {
    const {unit, toggleUnit}=useContext(BMIContext);

  return (
    <button className="toggle-btn" onClick={toggleUnit}>
      Switch to {unit === "metric" ? "Imperial" : "Metric"}
    </button>
  );
};

export default UnitToggle;