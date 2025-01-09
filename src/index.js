import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/brand-bulma.css";
import "./assets/App.css";
import reportWebVitals from './reportWebVitals';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter basename='/LLM-Data-Defenses'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} exact />
					<Route path="/about" element={<About />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
