import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}></Route>
    </Routes>
  );
};

export default App;
