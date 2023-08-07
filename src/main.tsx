import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SearchContext from "./context/MyContext";
import PaginationContext from "./context/PageContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchContext>
      <PaginationContext>
        <App />
      </PaginationContext>
    </SearchContext>
  </React.StrictMode>,
);
