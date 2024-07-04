import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./Pages/Chart";
import Home from "./Pages/Home";
import Story from "./Pages/Story";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/story/:id" element={<Story />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
