import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BMIProvider from "./context/bmiContext.jsx";
import SaveRecords from "./pages/saveRecords.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SaveRecordsProvider } from "./context/saveRecordsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BMIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/saveRecords"
            element={
              <SaveRecordsProvider>
                <SaveRecords />
              </SaveRecordsProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </BMIProvider>
  </StrictMode>
);
