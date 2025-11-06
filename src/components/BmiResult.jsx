import { useContext } from "react";
import { BMIContext } from "../context/bmiContext";

const BMIResult = () => {
  const { bmi, category, setShowResult } = useContext(BMIContext);

  const handleReset = () => {
    setShowResult(false);
  };
  return (
    <div className="result-container">
      <h3>Your BMI Result</h3>

      <div className="result-box">
        <p className="bmi-value">{bmi || ""}</p>
        <p className={`bmi-category ${category || ""}`}>
          {category ? category.toUpperCase() : "No result yet"}
        </p>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default BMIResult;
