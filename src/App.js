import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Enquiry from "./components/Enquiry";

//styles
import "./css/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enquiry-contact" element={<Enquiry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
