import { Link } from "react-router-dom";
import "../styles/savepage.css";
import { useState } from "react";
import { useContext } from "react";
import SaveRecordsContext from "../context/saveRecordsContext.jsx";

const SaveRecords = () => {
  const [person, setPerson] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [measurementType, setMeasurementType] = useState("");

  const onSave = () => {
    handleSave(person, bmiValue, measurementType);
    setPerson("");
    setBmiValue("");
  };

  const { savedList, handleSave, handleDelete } =
    useContext(SaveRecordsContext);

  return (
    <div className="save-container">
      <div className="save-box">
        <h2 className="save-heading">Save BMI Records</h2>

        <input
          className="save-input"
          type="text"
          placeholder="Person Name"
          onChange={(e) => setPerson(e.target.value)}
          value={person}
        />

        <input
          className="save-input"
          type="number"
          placeholder="Enter BMI Value"
          onChange={(e) => setBmiValue(e.target.value)}
          value={bmiValue}
        />

        <select
          className="save-input"
          onChange={(e) => setMeasurementType(e.target.value)}
          value={measurementType}
        >
          <option value="">Select Measurement Type</option>
          <option value="metric">Metric (kg, cm)</option>
          <option value="imperial">Imperial (lbs, inches)</option>
        </select>

        <button className="save-btn" onClick={onSave}>
          Save Record
        </button>

        <div className="list">
          {savedList.map((item, i) => (
            <div key={i} className="list-item">
              <strong>{item.person}:</strong> {item.bmi}{" "}
              {item.type ? `( ${item.type} )` : "(Metric)"}
              <button className="delete-btn" onClick={() => handleDelete(i)}>
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
};

export default SaveRecords;
