import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import inputReducer from "./components/redux/inputs";

const store = configureStore({ reducer: { input: inputReducer } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<App />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
