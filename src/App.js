import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zodiacs from "./components/Zodiacs";
import Days from "./components/Days";
import Result from "./components/Result";

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
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
