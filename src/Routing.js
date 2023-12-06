import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import News from "./News";

import RegisterandLogin from "./RegisterandLogin";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterandLogin />} />
          <Route path="/home" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
