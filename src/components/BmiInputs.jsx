import { useContext, useRef } from "react";
import { BMIContext } from "../context/bmiContext";

const BMIInput = () => {
  const weight = useRef();
  const height = useRef();
  const { calculateBmi } = useContext(BMIContext);

  const handleBmiCalculation = (e) => {
    e.preventDefault();

    const result = calculateBmi(
      parseFloat(weight.current.value),
      parseFloat(height.current.value)
    );

    weight.current.value = "";
    height.current.value = "";

    if (result) {
      alert(`BMI Calculated Successfully! Your BMI is ${result}`);
    } else {
      alert("Please enter valid height and weight!");
    }
  };

  return (
    <div className="input-container">
      <form className="input-form">
        <input
          type="number"
          className="height-input"
          placeholder="Enter height (cm or inches)"
          ref={height}
        />
        <input
          type="number"
          className="weight-input"
          placeholder="Enter weight (kg or lbs)"
          ref={weight}
        />
        <button
          className="calculate-btn"
          type="submit"
          onClick={handleBmiCalculation}
        >
          Calculate BMI
        </button>
      </form>
    </div>
  );
};

export default BMIInput;
