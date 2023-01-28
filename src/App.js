import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Polling from "./component/Polling";
import Signup from "./component/Signup";
const App = () => {
  return (
    <HashRouter>
      <Polling></Polling>
      <Routes>
        <Route path="/polling" element={<Polling />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
