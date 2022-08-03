import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zodiacs from "./components/Zodiacs";
import Days from "./components/Days";
import Result from "./components/Result";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Zodiacs />} />
          <Route path="/day" element={<Days />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
