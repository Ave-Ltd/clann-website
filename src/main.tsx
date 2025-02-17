import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Ensure Router is here, not in App.tsx */}
      <ThemeContextProvider> {/* ✅ Wrap theme context inside Router */}
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
