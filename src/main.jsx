import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BMIProvider from "./context/bmiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BMIProvider>
      <App />
    </BMIProvider>
  </StrictMode>
);
