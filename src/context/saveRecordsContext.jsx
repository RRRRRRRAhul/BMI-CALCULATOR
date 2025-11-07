import { createContext,useState, useEffect } from "react";

const SaveRecordsContext = createContext();

export default SaveRecordsContext;

const SaveRecordsProvider = ({ children }) => {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem("bmiRecords")) || [];
    setSavedList(records);
  }, []);

  const handleSave = (person, bmiValue, measurementType) => {
    if (!person || !bmiValue) {
      alert("Please fill all fields!");
      return;
    }
    const newRecord = [
      ...savedList,
      { person: person, bmi: parseFloat(bmiValue), type: measurementType },
    ];
    setSavedList(newRecord);
    localStorage.setItem("bmiRecords", JSON.stringify(newRecord));
  };

  const handleDelete = (index) => {
    const updateList = savedList.filter((_, i) => i !== index);
    setSavedList(updateList);
    localStorage.setItem("bmiRecords", JSON.stringify(updateList));
  };

  return (
    <SaveRecordsContext.Provider value={{savedList, handleSave, handleDelete}}>
      {children}
    </SaveRecordsContext.Provider>
  );
};

export { SaveRecordsProvider };
