import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Router path="/" element={<Home />}/>
          <Router path="movie/:id" element={<Movie />}/>
          <Router path="/" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
