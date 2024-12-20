import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../src/context/userContext.jsx";
import { CaptainProvider } from "./context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <CaptainProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </CaptainProvider>
);
