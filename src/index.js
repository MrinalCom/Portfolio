import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CursorContextProvider from "./context/cursorContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CursorContextProvider>
    <App />
  </CursorContextProvider>
);
