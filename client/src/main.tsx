import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "@root/root";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}
