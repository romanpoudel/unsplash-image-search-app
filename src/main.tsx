import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SearchContext from "./context/MyContext";
import PaginationContext from "./context/PageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SavedImages from "./components/save/SavedImages.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContext>
        <PaginationContext>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/saved-images" element={<SavedImages />} />
          </Routes>
        </PaginationContext>
      </SearchContext>
    </BrowserRouter>
  </React.StrictMode>,
);
