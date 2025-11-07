import { createContext } from "react";
import { useState } from "react";

export const BMIContext = createContext();

const BMIProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  const calculateBmi = (weight, height) => {
    if (!weight || !height) return null; 

    let result = 0;

    if (unit === "metric") {
      result = weight / (height / 100) ** 2;
    } else {
      result = (703 * weight) / height ** 2;
    }

    const finalBmi = result.toFixed(2);

    setBmi(finalBmi);
    determineCategory(result);
    setShowResult(true);

    return finalBmi; //  return final formatted BMI
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCategory("underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("normal");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("overweight");
    } else if (bmiValue >= 30) {
      setCategory("obese");
    }
  };

  return (
    <BMIContext.Provider
      value={{
        unit,
        toggleUnit,
        bmi,
        setBmi,
        category,
        setCategory,
        calculateBmi,
        showResult,
        setShowResult,
      }}
    >
      {children}
    </BMIContext.Provider>
  );
};

export default BMIProvider;
